'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Map, Navigation, Layers, TrendingUp, Building2 } from 'lucide-react';

export default function LocationsPage() {
  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 p-8 shadow-xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Training Locations
            </h1>
            <p className="text-cyan-100 text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              GIS mapping of training programs across India
            </p>
          </div>
          <Button className="bg-white text-cyan-600 hover:bg-cyan-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <MapPin className="h-4 w-4 mr-2" />
            Add Location
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 group-hover:from-cyan-500/20 group-hover:to-cyan-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Locations</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">156</p>
                <p className="text-xs text-gray-600 mt-1">Across 28 states</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Training Centers</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">89</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Coverage</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">85%</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5% expansion
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <Map className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Remote Areas</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">42</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <Navigation className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Map */}
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="border-b bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Map className="h-5 w-5 text-cyan-600" />
              Interactive GIS Map
            </CardTitle>
            <Button variant="outline" size="sm" className="hover:bg-cyan-50 hover:text-cyan-600 hover:border-cyan-600 transition-all">
              <Layers className="h-4 w-4 mr-2" />
              Layers
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl h-96 flex items-center justify-center border-2 border-dashed border-cyan-300">
            <div className="text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl mb-4">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <p className="text-gray-700 font-semibold text-lg">Interactive Map with Leaflet.js</p>
              <p className="text-gray-600 mt-2">Coming soon with real-time location tracking...</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-lg font-bold text-gray-900">Top Performing Locations</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {['Delhi', 'Mumbai', 'Bangalore', 'Chennai'].map((city, idx) => (
                <div key={city} className="flex items-center justify-between p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{city}</p>
                      <p className="text-sm text-gray-500">{(idx + 1) * 12} trainings</p>
                    </div>
                  </div>
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader className="border-b bg-gradient-to-r from-green-50 to-emerald-50">
            <CardTitle className="text-lg font-bold text-gray-900">Recent Additions</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {['Jaipur', 'Kolkata', 'Hyderabad', 'Pune'].map((city) => (
                <div key={city} className="flex items-center justify-between p-4 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{city}</p>
                      <p className="text-sm text-gray-500">Added this week</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    New
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
