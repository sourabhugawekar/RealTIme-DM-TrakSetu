'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, Sparkles, Lock, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Redirect to dashboard
      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
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

      <div className={`relative w-full max-w-md z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <p className="text-blue-200 mt-3 text-lg font-light">Sign in to your account</p>
        </Link>

        {/* Login Card with Glassmorphism */}
        <Card className="border-0 bg-gray-900/80 backdrop-blur-xl shadow-2xl animate-in slide-in-from-bottom-8 duration-700 delay-300 border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-lg"></div>
          <CardHeader className="relative space-y-1 pb-6">
            <CardTitle className="text-3xl font-bold text-white drop-shadow-lg">Welcome Back</CardTitle>
            <CardDescription className="text-blue-100 text-base">
              Enter your credentials to access the dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <Alert variant="destructive" className="bg-red-500/20 border-red-500/50 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertDescription className="text-red-100">{error}</AlertDescription>
                </Alert>
              )}

                            <div className="space-y-2 group">
                <Label htmlFor="email" className="text-white font-semibold text-base drop-shadow-lg">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-13 shadow-xl rounded-lg font-medium text-base"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <Label htmlFor="password" className="text-white font-semibold text-base drop-shadow-lg">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70 group-focus-within:text-white transition-colors z-10" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-12 pr-4 bg-white/95 border-2 border-white/60 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-300/50 transition-all backdrop-blur-sm h-13 shadow-xl rounded-lg font-medium text-base"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-300 hover:text-white transition-colors hover:underline font-medium"
                >
                  Forgot password?
                </Link>
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
                      Signing in...
                    </>
                  ) : (
                    'Sign in'
                  )}
                </span>
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-200">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-300 font-semibold hover:text-white transition-colors hover:underline">
                  Register here
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
