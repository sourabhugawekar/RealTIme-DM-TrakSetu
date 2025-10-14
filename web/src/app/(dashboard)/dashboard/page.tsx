'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, MapPin, TrendingUp } from 'lucide-react';
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
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-2">
          Real-time monitoring of disaster management training programs across India
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Trainings
            </CardTitle>
            <GraduationCap className="h-5 w-5 text-[#003366]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">1,248</div>
            <p className="text-xs text-green-600 mt-1">
              +12.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Participants
            </CardTitle>
            <Users className="h-5 w-5 text-[#003366]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">24,890</div>
            <p className="text-xs text-green-600 mt-1">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Active Locations
            </CardTitle>
            <MapPin className="h-5 w-5 text-[#003366]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">156</div>
            <p className="text-xs text-gray-600 mt-1">
              Across 28 states
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Completion Rate
            </CardTitle>
            <TrendingUp className="h-5 w-5 text-[#003366]" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">94.3%</div>
            <p className="text-xs text-green-600 mt-1">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Training Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Training Trend (Last 6 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trainingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="trainings" 
                  stroke="#003366" 
                  strokeWidth={2}
                  name="Trainings"
                />
                <Line 
                  type="monotone" 
                  dataKey="participants" 
                  stroke="#0066CC" 
                  strokeWidth={2}
                  name="Participants"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Regional Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent>
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
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 gap-6">
        {/* Training by Theme */}
        <Card>
          <CardHeader>
            <CardTitle>Training Distribution by Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={themeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="theme" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#003366" name="Number of Trainings" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Training Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { title: 'Earthquake Preparedness Workshop', location: 'Delhi', date: '2025-10-15', participants: 120 },
              { title: 'Flood Management Training', location: 'Mumbai', date: '2025-10-14', participants: 95 },
              { title: 'Fire Safety Advanced Course', location: 'Bangalore', date: '2025-10-13', participants: 80 },
              { title: 'Cyclone Response Training', location: 'Chennai', date: '2025-10-12', participants: 110 },
            ].map((training, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h4 className="font-medium text-gray-900">{training.title}</h4>
                  <p className="text-sm text-gray-600">
                    {training.location} • {training.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#003366]">
                    {training.participants} participants
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
