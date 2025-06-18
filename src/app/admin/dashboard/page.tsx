'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';

interface Testimonial {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  role_company: string;
  testimonial: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  censor_first_name: boolean;
  censor_last_name: boolean;
  consent_given: boolean;
  created_at: string;
  approved_at: string | null;
}

export default function AdminDashboardPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check authentication by trying to fetch testimonials
    // If cookie is invalid, the request will fail and redirect to login
    fetchTestimonials();
  }, [router]);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/admin/testimonials');
      setTestimonials(response.data);
    } catch (error: any) {
      console.error('Error fetching testimonials:', error);
      if (error.response?.status === 401) {
        // Unauthorized - redirect to login
        router.push('/admin/login');
      } else {
        setError('Failed to load testimonials');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const updateTestimonialStatus = async (id: number, status: 'APPROVED' | 'REJECTED' | 'PENDING') => {
    try {
      await axios.patch(`/api/admin/testimonials/${id}`, { status });
      
      // Update local state
      setTestimonials(prev => 
        prev.map(testimonial => 
          testimonial.id === id ? { ...testimonial, status } : testimonial
        )
      );
    } catch (error) {
      console.error('Error updating testimonial:', error);
      setError('Failed to update testimonial status');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/user/logout');
    } catch (error) {
      console.error('Logout error:', error);
      // Continue with logout even if request fails
    } finally {
      router.push('/admin/login');
    }
  };

  const filteredTestimonials = testimonials.filter(t => t.status.toLowerCase() === activeTab);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Testimonial Management
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-800">{error}</div>
          </div>
        )}

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['pending', 'approved', 'rejected'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab} ({testimonials.filter(t => t.status.toLowerCase() === tab).length})
              </button>
            ))}
          </nav>
        </div>

        {/* Testimonials List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No {activeTab} testimonials found.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredTestimonials.map((testimonial) => (
                <li key={testimonial.id} className="px-6 py-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium text-gray-900">
                          {testimonial.name}
                        </h3>
                        <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          testimonial.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                          testimonial.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {testimonial.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {testimonial.role_company && testimonial.role_company}
                      </p>
                      <p className="text-sm text-gray-500">
                        Censoring: {testimonial.censor_first_name ? 'First name' : ''} {testimonial.censor_last_name ? 'Last name' : ''} {!testimonial.censor_first_name && !testimonial.censor_last_name ? 'None' : ''}
                      </p>
                      <p className="mt-3 text-gray-900">
                        "{testimonial.testimonial}"
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Submitted: {new Date(testimonial.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    
                    {testimonial.status === 'PENDING' && (
                      <div className="ml-6 flex space-x-2">
                        <button
                          onClick={() => updateTestimonialStatus(testimonial.id, 'APPROVED')}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateTestimonialStatus(testimonial.id, 'REJECTED')}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                    
                    {testimonial.status === 'APPROVED' && (
                      <div className="ml-6 flex space-x-2">
                        <button
                          onClick={() => updateTestimonialStatus(testimonial.id, 'PENDING')}
                          className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Retract to Pending
                        </button>
                        <button
                          onClick={() => updateTestimonialStatus(testimonial.id, 'REJECTED')}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                    
                    {testimonial.status === 'REJECTED' && (
                      <div className="ml-6 flex space-x-2">
                        <button
                          onClick={() => updateTestimonialStatus(testimonial.id, 'APPROVED')}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateTestimonialStatus(testimonial.id, 'PENDING')}
                          className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded-md text-sm font-medium"
                        >
                          Move to Pending
                        </button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
