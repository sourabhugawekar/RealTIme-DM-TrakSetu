'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, Sparkles, User, Mail, Lock, Building, MapPin, Phone, UserCircle, ArrowLeft, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function RegisterPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    organization: '',
    region: '',
    contactNumber: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showRoleInfo, setShowRoleInfo] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (password: string): { strength: number; label: string; color: string } => {
    if (!password) return { strength: 0, label: '', color: '' };
    
    let strength = 0;
    if (password.length >= 6) strength += 1;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^a-zA-Z\d]/.test(password)) strength += 1;

    if (strength <= 1) return { strength, label: 'Weak', color: 'bg-red-500' };
    if (strength <= 3) return { strength, label: 'Medium', color: 'bg-yellow-500' };
    return { strength, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  // Role descriptions for user guidance
  const roleDescriptions: Record<string, { title: string; description: string; access: string }> = {
    ADMIN: {
      title: 'Admin (NDMA)',
      description: 'National Disaster Management Authority officials',
      access: 'Full system access, user management, national reports',
    },
    SDMA: {
      title: 'SDMA Representative',
      description: 'State Disaster Management Authority',
      access: 'State-level data management and reporting',
    },
    ATI: {
      title: 'ATI Representative',
      description: 'Administrative Training Institute',
      access: 'Regional training management and reports',
    },
    NGO: {
      title: 'NGO/Training Partner',
      description: 'Non-Governmental Organizations and Training Institutions',
      access: 'Organization-specific training data management',
    },
    TRAINER: {
      title: 'Trainer',
      description: 'Individual trainers conducting programs',
      access: 'Create and manage own training records',
    },
    VOLUNTEER: {
      title: 'Volunteer/Viewer',
      description: 'General volunteers or public viewers',
      access: 'Read-only access to public data and reports',
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Enhanced Validation
    if (!formData.name.trim()) {
      setError('Full name is required');
      return;
    }

    if (formData.name.length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }

    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!formData.password) {
      setError('Password is required');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (!formData.confirmPassword) {
      setError('Please confirm your password');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.role) {
      setError('Please select your role to continue');
      return;
    }

    // Role-specific validation
    if (['SDMA', 'ATI'].includes(formData.role) && !formData.region?.trim()) {
      setError('Region/State is required for SDMA and ATI roles');
      return;
    }

    if (['NGO', 'TRAINER'].includes(formData.role) && !formData.organization?.trim()) {
      setError('Organization is required for NGO and Trainer roles');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          organization: formData.organization,
          region: formData.region,
          contactNumber: formData.contactNumber,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // Redirect to dashboard
      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4 py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float-${i % 3 === 0 ? 'slow' : i % 3 === 1 ? 'medium' : 'fast'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast"></div>

      {/* Back Button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 z-20 group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 animate-in fade-in slide-in-from-left-4 duration-700"
      >
        <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all shadow-lg">
          <ArrowLeft className="h-5 w-5" />
        </div>
        <span className="font-medium drop-shadow-lg">Back to Home</span>
      </Link>

      <div className={`relative w-full max-w-2xl z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Logo and Header */}
        <Link href="/" className="block text-center mb-8 animate-in fade-in duration-700 cursor-pointer">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
          <div className="relative inline-block">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x hover:scale-105 transition-transform">
              ResiSphere
            </h1>
            <Sparkles className="absolute -top-2 -right-8 h-6 w-6 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-blue-200 mt-3 text-lg font-light">Join the national disaster management training network</p>
        </Link>

        {/* Register Card with Glassmorphism */}
        <Card className="border-0 bg-gray-900/80 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-8 duration-700 delay-300 border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg"></div>
          <CardHeader className="relative space-y-1 pb-6">
            <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">Create Your Account</CardTitle>
            <CardDescription className="text-blue-100 text-base">
              Fill in the details below to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <Alert variant="destructive" className="bg-red-500/20 border-red-500/50 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertDescription className="text-red-100">{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2 group">
                  <Label htmlFor="name" className="text-white font-semibold text-base drop-shadow-lg">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="email" className="text-white font-semibold text-base drop-shadow-lg">Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="password" className="text-white font-semibold text-base drop-shadow-lg">Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Minimum 6 characters"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-colors ${
                              i < passwordStrength.strength ? passwordStrength.color : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className={`text-xs ml-1 ${
                        passwordStrength.label === 'Strong' ? 'text-green-300' :
                        passwordStrength.label === 'Medium' ? 'text-yellow-300' :
                        'text-red-300'
                      }`}>
                        Password strength: {passwordStrength.label}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="confirmPassword" className="text-white font-semibold text-base drop-shadow-lg">Confirm Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Re-enter password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2 group md:col-span-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="role" className="text-white font-semibold text-base drop-shadow-lg">Role *</Label>
                    <button
                      type="button"
                      onClick={() => setShowRoleInfo(!showRoleInfo)}
                      className="text-blue-300 hover:text-white transition-colors flex items-center gap-1 text-sm"
                    >
                      <Info className="h-4 w-4" />
                      {showRoleInfo ? 'Hide' : 'Show'} Role Info
                    </button>
                  </div>
                  <div className="relative">
                    <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Select
                      value={formData.role}
                      onValueChange={(value) => setFormData({ ...formData, role: value })}
                      disabled={loading}
                    >
                      <SelectTrigger className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-md border-2 border-white/60 max-h-80">
                        <SelectItem value="ADMIN">
                          <div className="py-1">
                            <div className="font-semibold">Admin (NDMA)</div>
                            <div className="text-xs text-gray-600">Full system access & user management</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="SDMA">
                          <div className="py-1">
                            <div className="font-semibold">SDMA Representative</div>
                            <div className="text-xs text-gray-600">State-level data management</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="ATI">
                          <div className="py-1">
                            <div className="font-semibold">ATI Representative</div>
                            <div className="text-xs text-gray-600">Regional training management</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="NGO">
                          <div className="py-1">
                            <div className="font-semibold">NGO/Training Partner</div>
                            <div className="text-xs text-gray-600">Organization-specific data</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="TRAINER">
                          <div className="py-1">
                            <div className="font-semibold">Trainer</div>
                            <div className="text-xs text-gray-600">Manage own training records</div>
                          </div>
                        </SelectItem>
                        <SelectItem value="VOLUNTEER">
                          <div className="py-1">
                            <div className="font-semibold">Volunteer/Viewer</div>
                            <div className="text-xs text-gray-600">Read-only access to public data</div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Role Information Card */}
                  {showRoleInfo && formData.role && roleDescriptions[formData.role] && (
                    <div className="mt-3 p-4 bg-blue-500/20 border border-blue-400/30 rounded-lg backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-white font-semibold mb-1">{roleDescriptions[formData.role].title}</h4>
                          <p className="text-blue-100 text-sm mb-2">{roleDescriptions[formData.role].description}</p>
                          <p className="text-blue-200 text-xs">
                            <span className="font-medium">Access Level:</span> {roleDescriptions[formData.role].access}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="organization" className="text-white font-semibold text-base drop-shadow-lg">
                    Organization {['NGO', 'TRAINER'].includes(formData.role) && <span className="text-red-400">*</span>}
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      placeholder={['NGO', 'TRAINER'].includes(formData.role) ? 'Your organization (required)' : 'Your organization'}
                      value={formData.organization}
                      onChange={handleChange}
                      disabled={loading}
                      required={['NGO', 'TRAINER'].includes(formData.role)}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                  {['NGO', 'TRAINER'].includes(formData.role) && (
                    <p className="text-xs text-blue-200 ml-1">Required for your selected role</p>
                  )}
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="region" className="text-white font-semibold text-base drop-shadow-lg">
                    Region/State {['SDMA', 'ATI'].includes(formData.role) && <span className="text-red-400">*</span>}
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="region"
                      name="region"
                      type="text"
                      placeholder={['SDMA', 'ATI'].includes(formData.role) ? 'e.g., Maharashtra (required)' : 'e.g., Maharashtra'}
                      value={formData.region}
                      onChange={handleChange}
                      disabled={loading}
                      required={['SDMA', 'ATI'].includes(formData.role)}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                  {['SDMA', 'ATI'].includes(formData.role) && (
                    <p className="text-xs text-blue-200 ml-1">Required for your selected role</p>
                  )}
                </div>

                <div className="space-y-2 group">
                  <Label htmlFor="contactNumber" className="text-white font-semibold text-base drop-shadow-lg">Contact Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      disabled={loading}
                      className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-12 shadow-xl rounded-lg font-medium"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                disabled={loading}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                <span className="relative flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </span>
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-200">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-300 font-semibold hover:text-white transition-colors hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-blue-300/60 mt-8 animate-in fade-in duration-700 delay-500">
          &copy; 2025 ResiSphere - NDMA Initiative
        </p>
      </div>
    </div>
  );
}
