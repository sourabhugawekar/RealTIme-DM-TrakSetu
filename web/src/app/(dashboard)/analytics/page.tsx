'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, PieChart as PieChartIcon, LineChart as LineChartIcon, Download, Calendar, Target, Activity } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-8 shadow-xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Analytics & Reports
            </h1>
            <p className="text-green-100 text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Comprehensive insights and data-driven decision making
            </p>
          </div>
          <Button className="bg-white text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Analytics Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: BarChart3, title: 'Performance Metrics', color: 'from-blue-500 to-blue-600', bgColor: 'from-blue-500/10 to-blue-600/10', hoverBg: 'from-blue-500/20 to-blue-600/20' },
          { icon: LineChartIcon, title: 'Trend Analysis', color: 'from-purple-500 to-purple-600', bgColor: 'from-purple-500/10 to-purple-600/10', hoverBg: 'from-purple-500/20 to-purple-600/20' },
          { icon: PieChartIcon, title: 'Distribution Charts', color: 'from-green-500 to-green-600', bgColor: 'from-green-500/10 to-green-600/10', hoverBg: 'from-green-500/20 to-green-600/20' },
          { icon: TrendingUp, title: 'Growth Indicators', color: 'from-orange-500 to-orange-600', bgColor: 'from-orange-500/10 to-orange-600/10', hoverBg: 'from-orange-500/20 to-orange-600/20' },
        ].map((item, index) => (
          <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} group-hover:${item.hoverBg} transition-all`}></div>
            <CardContent className="pt-6 text-center relative z-10">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg mb-3 group-hover:scale-110 transition-transform`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <p className="font-semibold text-gray-900">{item.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Attendance</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">87.5%</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +3.2% this quarter
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Satisfaction Score</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4.8/5</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Excellent rating
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Training Hours</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">12.4K</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +15% increase
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <LineChartIcon className="h-5 w-5 text-blue-600" />
              Training Completion Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-blue-300">
              <div className="text-center">
                <LineChartIcon className="h-12 w-12 mx-auto text-blue-500 mb-2" />
                <p className="text-gray-700 font-semibold">Line Chart</p>
                <p className="text-gray-600 text-sm mt-1">Real-time trend visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              Regional Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-purple-300">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto text-purple-500 mb-2" />
                <p className="text-gray-700 font-semibold">Bar Chart</p>
                <p className="text-gray-600 text-sm mt-1">Compare regions and states</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <PieChartIcon className="h-5 w-5 text-green-600" />
              Training Categories
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-green-300">
              <div className="text-center">
                <PieChartIcon className="h-12 w-12 mx-auto text-green-500 mb-2" />
                <p className="text-gray-700 font-semibold">Pie Chart</p>
                <p className="text-gray-600 text-sm mt-1">Category distribution analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-orange-50 to-red-50">
            <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Growth Projections
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-orange-300">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto text-orange-500 mb-2" />
                <p className="text-gray-700 font-semibold">Growth Analysis</p>
                <p className="text-gray-600 text-sm mt-1">Predictive analytics and forecasting</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Analytics Section */}
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b bg-gradient-to-r from-cyan-50 to-blue-50">
          <CardTitle className="text-lg font-bold text-gray-900">Advanced Analytics Dashboard</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <div className="inline-flex p-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl mb-4">
              <BarChart3 className="h-16 w-16 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Analytics Suite</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive data visualization, predictive analytics, and custom reporting tools coming soon.
              Get insights into training effectiveness, participant engagement, and program ROI.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
