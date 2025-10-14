import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollAnimation from '@/components/ScrollAnimation';
import { 
  Shield, 
  Users, 
  MapPin, 
  BarChart3, 
  MessageSquare, 
  Bell,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 transition-all duration-300 border-b-2 border-blue-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-blue-100 group-hover:to-cyan-200 transition-all duration-300">ResiSphere</h1>
                <p className="text-xs text-blue-200 group-hover:text-cyan-200 transition-colors duration-300">Real-Time DM Training System</p>
              </div>
            </Link>
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button 
                  variant="ghost" 
                  className="text-white border border-blue-400 hover:bg-blue-700 hover:border-cyan-300 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-300 hover:to-blue-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 border-0">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="mb-6 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 hover:scale-105 border border-blue-200">
            <Shield className="h-5 w-5 text-blue-700 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">NDMA Initiative</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Centralised Platform for
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Disaster Management Training
            </span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 leading-relaxed">
            Monitor, manage, and analyze disaster management trainings across India in real-time. 
            Empowering SDMA, ATI, NGOs, and trainers with data-driven insights.
          </p>
          <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Link href="/register">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 border-0"
              >
                Start Monitoring
              </Button>
            </Link>
            <Link href="#features">
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300 hover:border-indigo-600"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="text-center hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 border-2 hover:border-blue-500 cursor-pointer group bg-gradient-to-br from-white to-blue-50">
            <CardContent className="pt-6">
              <div className="relative inline-block">
                <Users className="h-12 w-12 mx-auto mb-3 text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-300" />
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">5000+</div>
              <p className="text-gray-600 group-hover:text-blue-700 font-medium transition-colors duration-300">Active Users</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transition-all duration-300 border-2 hover:border-green-500 cursor-pointer group bg-gradient-to-br from-white to-green-50">
            <CardContent className="pt-6">
              <div className="relative inline-block">
                <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-600 group-hover:scale-110 group-hover:text-green-700 transition-all duration-300" />
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent group-hover:from-green-700 group-hover:to-emerald-700 transition-all duration-300">1200+</div>
              <p className="text-gray-600 group-hover:text-green-700 font-medium transition-colors duration-300">Trainings Completed</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300 border-2 hover:border-purple-500 cursor-pointer group bg-gradient-to-br from-white to-purple-50">
            <CardContent className="pt-6">
              <div className="relative inline-block">
                <MapPin className="h-12 w-12 mx-auto mb-3 text-purple-600 group-hover:scale-110 group-hover:text-purple-700 transition-all duration-300" />
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300">28</div>
              <p className="text-gray-600 group-hover:text-purple-700 font-medium transition-colors duration-300">States Covered</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-300 border-2 hover:border-orange-500 cursor-pointer group bg-gradient-to-br from-white to-orange-50">
            <CardContent className="pt-6">
              <div className="relative inline-block">
                <TrendingUp className="h-12 w-12 mx-auto mb-3 text-orange-600 group-hover:scale-110 group-hover:text-orange-700 transition-all duration-300" />
                <div className="absolute inset-0 bg-orange-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:to-red-700 transition-all duration-300">95%</div>
              <p className="text-gray-600 group-hover:text-orange-700 font-medium transition-colors duration-300">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none"></div>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">Comprehensive Features</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Everything you need to monitor and enhance disaster management training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          <Card className="hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 border-2 hover:border-blue-500 cursor-pointer group bg-gradient-to-br from-white to-blue-50/50">
            <CardHeader>
              <div className="relative inline-block">
                <Users className="h-10 w-10 mb-3 text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="group-hover:text-blue-700 transition-colors duration-300 font-bold">User Management</CardTitle>
              <CardDescription className="group-hover:text-gray-800 transition-colors duration-300">
                Role-based access control for Admin, SDMA, ATI, NGO, Trainers, and Volunteers
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-2xl hover:shadow-indigo-500/30 hover:scale-105 transition-all duration-300 border-2 hover:border-indigo-500 cursor-pointer group bg-gradient-to-br from-white to-indigo-50/50">
            <CardHeader>
              <div className="relative inline-block">
                <Shield className="h-10 w-10 mb-3 text-indigo-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="absolute inset-0 bg-indigo-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="group-hover:text-indigo-700 transition-colors duration-300 font-bold">Training Management</CardTitle>
              <CardDescription className="group-hover:text-gray-800 transition-colors duration-300">
                Create, schedule, and manage training sessions with real-time participant tracking
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300 border-2 hover:border-purple-500 cursor-pointer group bg-gradient-to-br from-white to-purple-50/50">
            <CardHeader>
              <div className="relative inline-block">
                <MapPin className="h-10 w-10 mb-3 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="group-hover:text-purple-700 transition-colors duration-300 font-bold">GIS Mapping</CardTitle>
              <CardDescription className="group-hover:text-gray-800 transition-colors duration-300">
                Interactive maps to visualize training locations with cluster markers by region
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 border-2 hover:border-cyan-500 cursor-pointer group bg-gradient-to-br from-white to-cyan-50/50">
            <CardHeader>
              <div className="relative inline-block">
                <BarChart3 className="h-10 w-10 mb-3 text-cyan-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="group-hover:text-cyan-700 transition-colors duration-300 font-bold">Analytics Dashboard</CardTitle>
              <CardDescription className="group-hover:text-gray-800 transition-colors duration-300">
                Comprehensive charts and AI-driven insights for training effectiveness analysis
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300 border-2 hover:border-pink-500 cursor-pointer group bg-gradient-to-br from-white to-pink-50/50">
            <CardHeader>
              <div className="relative inline-block">
                <MessageSquare className="h-10 w-10 mb-3 text-pink-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="absolute inset-0 bg-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="group-hover:text-pink-700 transition-colors duration-300 font-bold">Feedback & Evaluation</CardTitle>
              <CardDescription className="group-hover:text-gray-800 transition-colors duration-300">
                Collect participant feedback and generate detailed performance reports
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-300 border-2 hover:border-amber-500 cursor-pointer group bg-gradient-to-br from-white to-amber-50/50">
            <CardHeader>
              <div className="relative inline-block">
                <Bell className="h-10 w-10 mb-3 text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                <div className="absolute inset-0 bg-amber-400 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="group-hover:text-amber-700 transition-colors duration-300 font-bold">Notifications</CardTitle>
              <CardDescription className="group-hover:text-gray-800 transition-colors duration-300">
                Real-time email and in-app alerts for training sessions and important updates
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Impact Metrics Section with 3D Effect */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-50"></div>
        
        {/* Floating 3D Cubes Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 opacity-20 transform rotate-45 animate-float-slow" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 transform rotate-12 animate-float-medium" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-blue-400 opacity-15 transform rotate-45 animate-float-fast" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-400 opacity-25 animate-float-slow delay-700" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        </div>

        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6 hover:shadow-lg hover:shadow-purple-300/50 transition-all duration-300 hover:scale-105 border border-purple-200">
            <TrendingUp className="h-5 w-5 text-purple-700 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">Real-Time Impact</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-4">
            Making a Difference Nationwide
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our platform has transformed disaster management training across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {[
            { label: 'Lives Impacted', value: '2.5M+', icon: Users, color: 'from-blue-500 to-cyan-500', delay: '0' },
            { label: 'Training Hours', value: '850K+', icon: CheckCircle, color: 'from-purple-500 to-pink-500', delay: '150' },
            { label: 'Response Time', value: '-65%', icon: TrendingUp, color: 'from-orange-500 to-red-500', delay: '300' },
          ].map((metric, index) => (
            <div
              key={index}
              className={`relative group animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-${metric.delay}`}
            >
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3"></div>
              
              {/* Content */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-100 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2 transform transition-all duration-500 group-hover:scale-110`}>
                  {metric.value}
                </div>
                <p className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {metric.label}
                </p>
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section with Parallax Effect */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        {/* Animated Stars Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <MessageSquare className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Disaster Management Professionals
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Hear from those who are making a difference with ResiSphere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Director, SDMA Maharashtra',
                content: 'ResiSphere has revolutionized how we track and manage training programs. The real-time analytics have improved our response efficiency by 60%.',
                avatar: 'RK',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Priya Sharma',
                role: 'Training Coordinator, ATI Delhi',
                content: 'The platform\'s intuitive interface and comprehensive reporting features have made coordination across multiple states seamless and efficient.',
                avatar: 'PS',
                color: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Col. Arun Singh (Retd.)',
                role: 'Senior Trainer, NDRF',
                content: 'Outstanding tool for managing large-scale training operations. The GIS mapping feature is particularly impressive for planning regional trainings.',
                avatar: 'AS',
                color: 'from-orange-500 to-red-500'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`group animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-${index * 150}`}
              >
                <div className="relative h-full">
                  {/* 3D Card Layers */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"></div>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2"></div>
                  
                  {/* Main Content */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl h-full flex flex-col">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-cyan-300 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-blue-100 leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Star Rating */}
                    <div className="flex space-x-1 mt-6">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="text-yellow-400">★</div>
                      ))}
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        {/* Animated Connection Lines Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#8B5CF6', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path d="M 0 100 Q 400 50 800 100 T 1600 100" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
            <path d="M 0 200 Q 400 150 800 200 T 1600 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}}/>
            <path d="M 0 300 Q 400 250 800 300 T 1600 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '2s'}}/>
          </svg>
        </div>

        {/* Floating Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full mb-6 border border-blue-200 hover:shadow-lg hover:shadow-blue-300/50 transition-all duration-300 hover:scale-105">
              <CheckCircle className="h-5 w-5 text-blue-700 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Simple Process</span>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-4">
              How ResiSphere Works
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Streamlined workflow for efficient disaster management training coordination
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-600 opacity-30"></div>

              {/* Steps */}
              {[
                {
                  step: '01',
                  title: 'Register & Get Verified',
                  description: 'Organizations and trainers register on the platform with role-based access. NDMA verifies credentials for secure access to the system.',
                  icon: Users,
                  color: 'from-blue-500 to-cyan-500',
                  position: 'left'
                },
                {
                  step: '02',
                  title: 'Plan & Schedule Training',
                  description: 'Create training sessions with details like location, theme, duration, and target participants. Use GIS mapping to optimize regional coverage.',
                  icon: Shield,
                  color: 'from-indigo-500 to-purple-500',
                  position: 'right'
                },
                {
                  step: '03',
                  title: 'Real-Time Monitoring',
                  description: 'Track ongoing trainings with live updates, participant attendance, and progress metrics. Receive instant notifications for critical updates.',
                  icon: BarChart3,
                  color: 'from-purple-500 to-pink-500',
                  position: 'left'
                },
                {
                  step: '04',
                  title: 'Collect & Analyze Feedback',
                  description: 'Gather participant feedback and performance data. Generate comprehensive reports with AI-driven insights for continuous improvement.',
                  icon: TrendingUp,
                  color: 'from-pink-500 to-orange-500',
                  position: 'right'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-16 last:mb-0 animate-in fade-in slide-in-from-${item.position}-4 duration-1000 delay-${index * 200}`}
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${item.position === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className="flex-1 group">
                      <div className="relative">
                        {/* 3D Card Layers */}
                        <div className="absolute inset-0 bg-white rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 shadow-xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-1"></div>
                        
                        {/* Main Content */}
                        <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                          <div className="flex items-start space-x-4">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg`}>
                              <item.icon className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <span className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300`}>
                                  {item.step}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                                  {item.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Glow Effect */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`}></div>
                        </div>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden md:flex flex-shrink-0 z-10">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl transform transition-all duration-500 hover:scale-125 hover:rotate-180`}>
                          <div className="w-8 h-8 rounded-full bg-white"></div>
                        </div>
                        {/* Pulsing Ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} animate-ping opacity-20`}></div>
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-in fade-in zoom-in duration-1000 delay-800">
            <div className="inline-flex flex-col items-center space-y-4 p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg font-semibold text-gray-800">Ready to get started?</span>
              </div>
              <Link href="/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 border-0 px-8 py-6 text-lg">
                  Create Your Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x"></div>
        
        {/* Animated Sliding Shapes */}
        <div className="absolute inset-0">
          {/* Large circles sliding from left to right */}
          <div className="absolute top-10 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-slide-right"></div>
          <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-slide-left"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl animate-slide-diagonal"></div>
          
          {/* Smaller floating particles */}
          <div className="absolute top-20 left-1/3 w-4 h-4 bg-white/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyan-300/50 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-blue-300/40 rounded-full animate-float-fast"></div>
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white/60 rounded-full animate-float-slow delay-500"></div>
          <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-purple-300/40 rounded-full animate-float-medium delay-700"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Training Management?
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={150}>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Join the national network of disaster management professionals using ResiSphere
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <div>
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 hover:scale-110 hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 font-semibold px-8 py-6 text-lg group relative overflow-hidden">
                  <span className="relative z-10">Get Started Today</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>

        {/* Animated Wave Effect at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path 
              d="M0,50 C240,70 480,30 720,50 C960,70 1200,30 1440,50 L1440,100 L0,100 Z" 
              fill="rgb(17, 24, 39)" 
              className="animate-wave"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <ScrollAnimation delay={0}>
              <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-3 group w-fit">
                <div className="relative">
                  <Shield className="h-10 w-10 text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:text-cyan-400" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
                </div>
                <div>
                  <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-500">
                    ResiSphere
                  </span>
                  <p className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">Real-Time DM Training System</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                A National Disaster Management Authority (NDMA) initiative for comprehensive real-time training monitoring and management across India.
              </p>
              <div className="flex space-x-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer group">
                  <Shield className="h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 cursor-pointer group">
                  <MapPin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer group">
                  <Users className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Quick Links */}
            <ScrollAnimation delay={150}>
              <div>
              <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            </ScrollAnimation>

            {/* Resources */}
            <ScrollAnimation delay={300}>
              <div>
              <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/dashboard" className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/trainings" className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Trainings
                  </Link>
                </li>
                <li>
                  <Link href="/analytics" className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Reports
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-purple-400 transition-all duration-300 flex items-center group text-sm">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation delay={450}>
              <div>
              <h3 className="font-bold text-lg mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600/20 to-blue-700/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MessageSquare className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <a href="mailto:info@resisphere.gov.in" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      info@resisphere.gov.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600/20 to-indigo-700/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Bell className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <a href="tel:1800-XXX-XXXX" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      1800-XXX-XXXX
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600/20 to-purple-700/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Address</p>
                    <p className="text-sm text-gray-300">
                      NDMA Bhawan, New Delhi
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            </ScrollAnimation>
          </div>

          {/* Bottom Bar */}
          <ScrollAnimation delay={600}>
            <div className="border-t border-gray-700/50 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400 text-center md:text-left">
                &copy; 2025 <span className="text-cyan-400 font-semibold">ResiSphere</span> - National Disaster Management Authority. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-xs text-gray-500">Powered by</span>
                <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <Shield className="h-4 w-4 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">NDMA</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-600/10 to-pink-600/10 border border-indigo-500/20 hover:border-pink-400/40 transition-all duration-300 group">
                  <TrendingUp className="h-4 w-4 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs font-semibold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">Ministry of Home Affairs</span>
                </div>
              </div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}
