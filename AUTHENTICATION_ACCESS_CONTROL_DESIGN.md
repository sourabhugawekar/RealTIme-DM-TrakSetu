# Authentication and Access Control Design
## ResiSphere - Real-Time Disaster Management Training System

---

## 1. Overview

This document outlines the authentication flow, user roles, and access control mechanisms for ResiSphere, ensuring secure, role-based access to the disaster management training monitoring system.

---

## 2. User Roles and Hierarchy

### 2.1 Role Definitions

| Role | Description | Permission Level |
|------|-------------|------------------|
| **ADMIN** | NDMA officials with full system access | Full Access (Level 5) |
| **SDMA** | State Disaster Management Authority representatives | State-Level Management (Level 4) |
| **ATI** | Administrative Training Institute representatives | Regional Management (Level 4) |
| **NGO** | NGO/Training Partner representatives | Organization Management (Level 3) |
| **TRAINER** | Individual trainers conducting programs | Limited Management (Level 2) |
| **VOLUNTEER** | General volunteers or public viewers | Read-Only (Level 1) |

### 2.2 Role Mapping (As Per Requirements)

**Admin (NDMA):**
- Role Code: `ADMIN`
- Full system access
- User management capabilities
- Generate all reports
- Monitor all data across states and organizations

**State-Level Users (SDMA, ATI):**
- Role Codes: `SDMA`, `ATI`
- Enter, edit, and view their own training data
- Regional/state-level data access
- Generate state-specific reports
- Cannot access other states' data

**Training Partner (NGO, Institution):**
- Role Code: `NGO`
- Enter, edit, and view their own organization's training data
- Limited to their organization's scope
- Generate organization-specific reports
- Cannot access other organizations' data

**Viewer (Public or Authorized Officer):**
- Role Code: `VOLUNTEER`
- Read-only access to public data
- View approved reports and statistics
- No edit, delete, or management capabilities
- Limited to public/approved content

---

## 3. Authentication Flow

### 3.1 Registration Flow

```
User visits /register
  ↓
Fills registration form (name, email, password, role, organization, region, contact)
  ↓
System validates input
  ↓
Password hashed using bcryptjs
  ↓
User record created in MongoDB
  ↓
JWT token generated with user data (userId, email, role, name)
  ↓
Token stored in HTTP-only cookie (7-day expiration)
  ↓
User redirected to /dashboard
```

**Required Fields:**
- Name (required)
- Email (required, unique)
- Password (required, min 6 characters)
- Role (required, dropdown selection)
- Organization (optional)
- Region/State (optional)
- Contact Number (optional)

**Validation Rules:**
- Email must be unique and valid format
- Password minimum 6 characters
- Role must be one of: ADMIN, SDMA, ATI, NGO, TRAINER, VOLUNTEER
- Name 2-100 characters

### 3.2 Login Flow

```
User visits /login
  ↓
Enters email and password
  ↓
System queries User model by email
  ↓
Compares password hash using bcryptjs
  ↓
If valid: Generate JWT token
  ↓
Store token in HTTP-only cookie
  ↓
Redirect to /dashboard (role-based dashboard)
  ↓
If invalid: Show error message
```

**Security Features:**
- Passwords never stored in plain text
- JWT tokens with 7-day expiration
- HTTP-only cookies prevent XSS attacks
- Server-side validation on all requests

### 3.3 Logout Flow

```
User clicks logout
  ↓
DELETE /api/auth/logout called
  ↓
Token cookie deleted/cleared
  ↓
User redirected to /login
```

---

## 4. Access Control Matrix

### 4.1 Feature-Based Permissions

| Feature | ADMIN | SDMA | ATI | NGO | TRAINER | VOLUNTEER |
|---------|-------|------|-----|-----|---------|-----------|
| **User Management** |
| Create users | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Edit users | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Delete users | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View all users | ✅ | 🟡 (own state) | 🟡 (own region) | 🟡 (own org) | ❌ | ❌ |
| **Training Management** |
| Create training | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit own training | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Edit any training | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Delete own training | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| Delete any training | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View own training | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| View all training | ✅ | 🟡 (own state) | 🟡 (own region) | 🟡 (own org) | ❌ | 🟡 (public) |
| **Analytics & Reports** |
| View national analytics | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| View state analytics | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| View org analytics | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| View public reports | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Generate reports | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Feedback Module** |
| Submit feedback | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| View own feedback | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| View all feedback | ✅ | 🟡 (own state) | 🟡 (own region) | 🟡 (own org) | ❌ | ❌ |
| **GIS Mapping** |
| View training locations | ✅ | ✅ | ✅ | ✅ | ✅ | 🟡 (public) |
| Add/Edit locations | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Dashboard Access** |
| Admin dashboard | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Management dashboard | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Public dashboard | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

**Legend:**
- ✅ Full Access
- 🟡 Limited/Scoped Access
- ❌ No Access

---

## 5. Authorization Middleware

### 5.1 Middleware Functions (Already Implemented)

```typescript
// Check if user is authenticated
requireAuth(request: NextRequest): Promise<JWTPayload | null>

// Check if user has specific role(s)
hasRole(user: JWTPayload, allowedRoles: UserRole[]): boolean

// Check if user is admin
isAdmin(user: JWTPayload): boolean

// Check if user can manage trainings
canManageTrainings(user: JWTPayload): boolean

// Check if user can view analytics
canViewAnalytics(user: JWTPayload): boolean
```

### 5.2 Additional Middleware Needed

```typescript
// Check if user can access specific resource
canAccessResource(user: JWTPayload, resourceOwnerId: string): boolean

// Check if user can access state data
canAccessStateData(user: JWTPayload, stateId: string): boolean

// Check if user can access organization data
canAccessOrgData(user: JWTPayload, orgId: string): boolean

// Check if user has read-only access
isReadOnly(user: JWTPayload): boolean
```

---

## 6. Data Access Patterns

### 6.1 ADMIN Access Pattern
```typescript
// Full access to all resources
filter = {} // No restrictions
```

### 6.2 SDMA/ATI Access Pattern
```typescript
// Limited to their state/region
filter = {
  $or: [
    { createdBy: user.userId },
    { region: user.region },
    { state: user.state }
  ]
}
```

### 6.3 NGO Access Pattern
```typescript
// Limited to their organization
filter = {
  $or: [
    { createdBy: user.userId },
    { organization: user.organization }
  ]
}
```

### 6.4 TRAINER Access Pattern
```typescript
// Limited to their own records
filter = {
  createdBy: user.userId
}
```

### 6.5 VOLUNTEER (Viewer) Access Pattern
```typescript
// Read-only public data
filter = {
  isPublic: true,
  status: 'approved'
}
```

---

## 7. API Route Protection

### 7.1 Protected Routes Structure

```
/api/auth/*           → Public (login, register, logout)
/api/users/*          → ADMIN only
/api/trainings/*      → ADMIN, SDMA, ATI, NGO, TRAINER (scoped)
/api/analytics/*      → ADMIN, SDMA, ATI, NGO (scoped)
/api/feedback/*       → All authenticated users (scoped)
/api/reports/*        → ADMIN, SDMA, ATI, NGO (scoped)
/api/public/*         → All users (including VOLUNTEER)
```

### 7.2 Middleware Implementation Pattern

```typescript
// API route example
export async function GET(request: NextRequest) {
  const user = await getCurrentUserFromRequest(request);
  
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  if (!hasRole(user, ['ADMIN', 'SDMA', 'ATI'])) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  
  // Apply data filter based on role
  const filter = getFilterForUser(user);
  const data = await getData(filter);
  
  return NextResponse.json(data);
}
```

---

## 8. Page-Level Protection

### 8.1 Protected Pages

```typescript
// Page-level authentication check
export default async function ProtectedPage() {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect('/login');
  }
  
  if (!hasRole(user, ['ADMIN'])) {
    redirect('/dashboard'); // Redirect to appropriate dashboard
  }
  
  return <AdminDashboard user={user} />;
}
```

### 8.2 Dashboard Routing

```
/dashboard           → All authenticated users (role-based view)
/dashboard/admin     → ADMIN only
/dashboard/manage    → SDMA, ATI, NGO, TRAINER
/dashboard/view      → VOLUNTEER
```

---

## 9. Security Best Practices

### 9.1 Implemented Security Features
- ✅ Password hashing with bcryptjs
- ✅ JWT tokens with expiration (7 days)
- ✅ HTTP-only cookies (XSS protection)
- ✅ Server-side validation
- ✅ Role-based access control
- ✅ MongoDB injection prevention (Mongoose)
- ✅ HTTPS in production

### 9.2 Additional Recommendations
- 🔄 Add rate limiting on login/register endpoints
- 🔄 Implement refresh token mechanism
- 🔄 Add CSRF protection
- 🔄 Implement account lockout after failed attempts
- 🔄 Add email verification for new accounts
- 🔄 Implement password reset flow
- 🔄 Add audit logging for sensitive operations
- 🔄 Implement session management

---

## 10. User Stories

### 10.1 Admin (NDMA)
**As an ADMIN, I want to:**
1. View all users across all states and organizations
2. Create, edit, and delete any user account
3. Monitor all training data nationwide
4. Generate comprehensive reports with national statistics
5. Access analytics for all states and organizations
6. Approve or reject training submissions
7. Manage system settings and configurations

### 10.2 State-Level User (SDMA/ATI)
**As a SDMA/ATI user, I want to:**
1. Register with my state/region information
2. Enter training data for programs in my state
3. Edit and delete my own training records
4. View all trainings within my state/region
5. Generate state-level reports and analytics
6. Submit feedback on trainings
7. See training locations on a map for my state

### 10.3 Training Partner (NGO)
**As an NGO representative, I want to:**
1. Register with my organization details
2. Enter training data for my organization's programs
3. Edit and delete my organization's training records
4. View only my organization's training data
5. Generate organization-specific reports
6. Track participant attendance and performance
7. Submit feedback on training effectiveness

### 10.4 Viewer (VOLUNTEER)
**As a VOLUNTEER/viewer, I want to:**
1. Register with basic information
2. View public training data and reports
3. See approved statistics and analytics
4. View training locations on public map
5. Submit feedback on public trainings
6. Access educational resources
7. See upcoming public training programs

---

## 11. Implementation Status

### ✅ Already Implemented
- User model with 6 roles (ADMIN, SDMA, ATI, NGO, TRAINER, VOLUNTEER)
- JWT authentication with token generation and verification
- Login and registration API endpoints
- Password hashing with bcryptjs
- Basic role-checking functions (hasRole, isAdmin, canManageTrainings, canViewAnalytics)
- HTTP-only cookie storage
- Login and register UI pages with Three.js-inspired animations

### 🔄 Pending Implementation
- Enhanced RBAC middleware with resource-level access control
- Data filtering based on user role and scope
- Admin user management dashboard
- Role-specific dashboards (SDMA/ATI/NGO, Viewer)
- Protected API routes with role-based filters
- Page-level route protection
- Audit logging system
- Account verification and password reset flows

---

## 12. Next Steps

### Phase 2: UI Enhancement (CURRENT)
- ✅ Enhance login/register pages with animations
- ⏳ Add role-specific help text in registration
- ⏳ Improve error messaging and validation feedback

### Phase 3: Backend RBAC
- Implement enhanced middleware functions
- Add data filtering logic for each role
- Protect all API routes
- Add resource ownership validation

### Phase 4: Dashboard Development
- Build Admin dashboard with user management
- Build SDMA/ATI/NGO management dashboard
- Build VOLUNTEER read-only dashboard
- Implement role-based navigation

### Phase 5: Security Hardening
- Add rate limiting
- Implement refresh tokens
- Add CSRF protection
- Implement audit logging
- Add email verification

---

## 13. Testing Requirements

### 13.1 Authentication Testing
- Test user registration with all roles
- Test login with valid/invalid credentials
- Test token expiration handling
- Test logout functionality

### 13.2 Authorization Testing
- Test ADMIN can access all resources
- Test SDMA/ATI can only access their state data
- Test NGO can only access their organization data
- Test TRAINER can only access their own records
- Test VOLUNTEER has read-only access to public data
- Test unauthorized access returns 403 Forbidden

### 13.3 Security Testing
- Test SQL/NoSQL injection prevention
- Test XSS protection
- Test CSRF protection
- Test rate limiting
- Test session security

---

## Document Version: 1.0
**Last Updated:** October 14, 2025  
**Status:** Design Phase Complete ✅  
**Next Phase:** UI Enhancement & Backend RBAC Implementation
