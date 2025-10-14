'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, MapPin, TrendingUp, ArrowRight, Calendar, Award, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

// Mock data for demonstration
const trainingData = [
  { month: 'Jan', trainings: 45, participants: 890 },
  { month: 'Feb', trainings: 52, participants: 1040 },
  { month: 'Mar', trainings: 61, participants: 1220 },
  { month: 'Apr', trainings: 58, participants: 1160 },
  { month: 'May', trainings: 70, participants: 1400 },
  { month: 'Jun', trainings: 65, participants: 1300 },
];

const regionalData = [
  { region: 'North', value: 320, color: '#003366' },
  { region: 'South', value: 280, color: '#0066CC' },
  { region: 'East', value: 240, color: '#3399FF' },
  { region: 'West', value: 300, color: '#66B2FF' },
  { region: 'Central', value: 200, color: '#99CCFF' },
];

const themeData = [
  { theme: 'Earthquake', count: 145 },
  { theme: 'Flood', count: 120 },
  { theme: 'Fire', count: 98 },
  { theme: 'Cyclone', count: 87 },
  { theme: 'Landslide', count: 65 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Enhanced Page Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 shadow-xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Dashboard Overview
          </h1>
          <p className="text-blue-100 text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Real-time monitoring of disaster management training programs across India
          </p>
          <div className="mt-4 flex items-center gap-2 text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Trainings
            </CardTitle>
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">1,248</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% from last month
            </p>
            <Link href="/trainings">
              <Button variant="ghost" size="sm" className="mt-3 w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-all"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Participants
            </CardTitle>
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform">
              <Users className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">24,890</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +8.2% from last month
            </p>
            <Link href="/participants">
              <Button variant="ghost" size="sm" className="mt-3 w-full text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                View Details <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 group-hover:from-cyan-500/20 group-hover:to-cyan-600/20 transition-all"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Locations
            </CardTitle>
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg group-hover:scale-110 transition-transform">
              <MapPin className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">156</div>
            <p className="text-xs text-gray-600 mt-1">
              Across 28 states
            </p>
            <Link href="/locations">
              <Button variant="ghost" size="sm" className="mt-3 w-full text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50">
                View Map <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all"></div>
          <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-gray-600">
              Completion Rate
            </CardTitle>
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg group-hover:scale-110 transition-transform">
              <Award className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">94.3%</div>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +2.1% from last month
            </p>
            <Link href="/analytics">
              <Button variant="ghost" size="sm" className="mt-3 w-full text-green-600 hover:text-green-700 hover:bg-green-50">
                View Analytics <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Training Trend */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold text-gray-900">Training Trend (Last 6 Months)</CardTitle>
              <Link href="/analytics">
                <Button variant="ghost" size="sm" className="text-blue-600">
                  View More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="trainings" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  name="Trainings"
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="participants" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  name="Participants"
                  dot={{ fill: '#8b5cf6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Distribution */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold text-gray-900">Regional Distribution</CardTitle>
              <Link href="/locations">
                <Button variant="ghost" size="sm" className="text-purple-600">
                  View Map <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={regionalData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry: any) => `${entry.region}: ${(entry.percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {regionalData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Charts Row 2 */}
      <div className="grid grid-cols-1 gap-6">
        {/* Training by Theme */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-bold text-gray-900">Training Distribution by Theme</CardTitle>
              <Link href="/trainings">
                <Button variant="ghost" size="sm" className="text-cyan-600">
                  View Details <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={themeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="theme" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="count" 
                  fill="url(#colorGradient)" 
                  name="Number of Trainings"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={1}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Recent Activity */}
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-gray-900">Recent Training Sessions</CardTitle>
            <Link href="/trainings">
              <Button variant="ghost" size="sm" className="text-green-600">
                View All <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {[
              { title: 'Earthquake Preparedness Workshop', location: 'Delhi', date: '2025-10-15', participants: 120, status: 'ongoing', theme: 'Earthquake' },
              { title: 'Flood Management Training', location: 'Mumbai', date: '2025-10-14', participants: 95, status: 'completed', theme: 'Flood' },
              { title: 'Fire Safety Advanced Course', location: 'Bangalore', date: '2025-10-13', participants: 80, status: 'completed', theme: 'Fire' },
              { title: 'Cyclone Response Training', location: 'Chennai', date: '2025-10-12', participants: 110, status: 'completed', theme: 'Cyclone' },
            ].map((training, index) => (
              <Link href={`/trainings/${index + 1}`} key={index}>
                <div className="group relative overflow-hidden p-5 border-2 border-gray-100 rounded-xl hover:border-blue-200 hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className={`h-5 w-5 ${training.status === 'ongoing' ? 'text-orange-500' : 'text-green-500'}`} />
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{training.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          training.status === 'ongoing' 
                            ? 'bg-orange-100 text-orange-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {training.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {training.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(training.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {training.theme}
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {training.participants}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">participants</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all ml-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
