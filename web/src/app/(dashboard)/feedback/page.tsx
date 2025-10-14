'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, Star, ThumbsUp, ThumbsDown, TrendingUp, Smile, Frown, Meh } from 'lucide-react';

export default function FeedbackPage() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [sentiment, setSentiment] = useState<'positive' | 'neutral' | 'negative' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    training: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setRating(0);
    setSentiment(null);
    setFormData({
      name: '',
      email: '',
      training: '',
      category: '',
      message: '',
    });
    setIsSubmitting(false);
    
    alert('Feedback submitted successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 p-8 shadow-xl">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Training Feedback
          </h1>
          <p className="text-orange-100 text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Share your experience and help us improve our disaster management training programs
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/10 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Feedback</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">1,847</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% this month
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">4.6/5</p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <Star className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 group-hover:from-purple-500/20 group-hover:to-purple-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Positive Reviews</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">87%</p>
                <p className="text-xs text-gray-600 mt-1">1,605 responses</p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                <ThumbsUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/10 group-hover:from-orange-500/20 group-hover:to-orange-600/20 transition-all"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Response Rate</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">92%</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Excellent engagement
                </p>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Form */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-orange-600" />
                Submit Your Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Training and Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training Program <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="training"
                      value={formData.training}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="">Select training</option>
                      <option value="earthquake">Earthquake Response Training</option>
                      <option value="flood">Flood Management Training</option>
                      <option value="fire">Fire Safety Training</option>
                      <option value="cyclone">Cyclone Preparedness</option>
                      <option value="landslide">Landslide Prevention</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Feedback Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                    >
                      <option value="">Select category</option>
                      <option value="content">Training Content</option>
                      <option value="instructor">Instructor Performance</option>
                      <option value="facilities">Facilities & Resources</option>
                      <option value="organization">Organization & Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overall Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            star <= (hoveredRating || rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="ml-2 text-sm text-gray-600 font-medium">
                        {rating} out of 5 stars
                      </span>
                    )}
                  </div>
                </div>

                {/* Sentiment */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you describe your experience?
                  </label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setSentiment('positive')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        sentiment === 'positive'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                    >
                      <Smile className={`h-8 w-8 mx-auto mb-2 ${sentiment === 'positive' ? 'text-green-500' : 'text-gray-400'}`} />
                      <p className="text-sm font-medium">Positive</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSentiment('neutral')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        sentiment === 'neutral'
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-300 hover:border-yellow-300'
                      }`}
                    >
                      <Meh className={`h-8 w-8 mx-auto mb-2 ${sentiment === 'neutral' ? 'text-yellow-500' : 'text-gray-400'}`} />
                      <p className="text-sm font-medium">Neutral</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSentiment('negative')}
                      className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                        sentiment === 'negative'
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300 hover:border-red-300'
                      }`}
                    >
                      <Frown className={`h-8 w-8 mx-auto mb-2 ${sentiment === 'negative' ? 'text-red-500' : 'text-gray-400'}`} />
                      <p className="text-sm font-medium">Negative</p>
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Feedback <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                    placeholder="Please share your detailed feedback, suggestions, or concerns..."
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum 20 characters ({formData.message.length}/20)
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || rating === 0 || formData.message.length < 20}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Recent Feedback */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="border-b bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="text-lg font-bold text-gray-900">Recent Feedback</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { name: 'Rajesh Kumar', rating: 5, comment: 'Excellent training program! Very informative.', time: '2 hours ago' },
                  { name: 'Priya Sharma', rating: 4, comment: 'Great content, could use more practical exercises.', time: '5 hours ago' },
                  { name: 'Amit Patel', rating: 5, comment: 'Outstanding instructor and facilities.', time: '1 day ago' },
                ].map((feedback, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900">{feedback.name}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{feedback.comment}</p>
                    <p className="text-xs text-gray-400">{feedback.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow mt-6">
            <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-lg font-bold text-gray-900">Feedback Tips</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5" />
                  <span>Be specific about what you liked or didn't like</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5" />
                  <span>Include constructive suggestions for improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5" />
                  <span>Mention both strengths and areas for growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5" />
                  <span>Your feedback helps us improve our programs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
