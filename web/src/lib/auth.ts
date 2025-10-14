import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { UserRole } from '@/models/User';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'your-secret-key-change-this-in-production'
);

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
  name: string;
}

/**
 * Generate JWT token
 */
export async function generateToken(payload: JWTPayload): Promise<string> {
  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify JWT token
 */
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as JWTPayload;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Get current user from cookies
 */
export async function getCurrentUser(): Promise<JWTPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
}

/**
 * Get current user from request
 */
export async function getCurrentUserFromRequest(
  request: NextRequest
): Promise<JWTPayload | null> {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return null;
  }

  return verifyToken(token);
}

/**
 * Check if user has required role
 */
export function hasRole(user: JWTPayload | null, allowedRoles: UserRole[]): boolean {
  if (!user) return false;
  return allowedRoles.includes(user.role);
}

/**
 * Check if user is admin
 */
export function isAdmin(user: JWTPayload | null): boolean {
  return hasRole(user, ['ADMIN']);
}

/**
 * Check if user can manage trainings
 */
export function canManageTrainings(user: JWTPayload | null): boolean {
  return hasRole(user, ['ADMIN', 'SDMA', 'ATI', 'NGO', 'TRAINER']);
}

/**
 * Check if user can view analytics
 */
export function canViewAnalytics(user: JWTPayload | null): boolean {
  return hasRole(user, ['ADMIN', 'SDMA', 'ATI', 'NGO']);
}

/**
 * Middleware helper to protect routes
 */
export async function requireAuth(
  request: NextRequest,
  allowedRoles?: UserRole[]
): Promise<{ user: JWTPayload } | { error: string; status: number }> {
  const user = await getCurrentUserFromRequest(request);

  if (!user) {
    return { error: 'Unauthorized', status: 401 };
  }

  if (allowedRoles && !hasRole(user, allowedRoles)) {
    return { error: 'Forbidden', status: 403 };
  }

  return { user };
}
