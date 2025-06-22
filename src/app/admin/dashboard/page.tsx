'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';
import { pt_sans } from '@/app/fonts';
import toast, { Toaster } from 'react-hot-toast';

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
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const router = useRouter();

  const fetchTestimonials = useCallback(async () => {
    try {
      const response = await axios.get('/api/admin/testimonials');
      setTestimonials(response.data);
    } catch (error: unknown) {
      console.error('Error fetching testimonials:', error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        // Unauthorized - redirect to login
        router.push('/admin/login');
      } else {
        setError('Failed to load testimonials');
      }
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    // Check authentication by trying to fetch testimonials
    // If cookie is invalid, the request will fail and redirect to login
    fetchTestimonials();
  }, [fetchTestimonials]);

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

  const deleteTestimonial = async (id: number) => {
    try {
      await axios.delete(`/api/admin/testimonials/${id}`);
      setTestimonials(prev => prev.filter(t => t.id !== id));
    } catch (error) {
      setError('Failed to delete testimonial');
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

  const handleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === filteredTestimonials.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredTestimonials.map((t) => t.id));
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    try {
      const res = await axios.post('/api/admin/testimonials/bulk_delete', { ids: selectedIds });
      setTestimonials((prev) => prev.filter((t) => !selectedIds.includes(t.id)));
      setSelectedIds([]);
      toast.success(res.data.message || 'Testimonials deleted successfully.');
    } catch (error) {
      setError('Failed to delete selected testimonials');
      toast.error('Failed to delete selected testimonials');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Toaster position="top-center" toastOptions={{
        className: 'text-base-content bg-base-100 border border-base-300 shadow-lg',
        style: { fontSize: '1rem', maxWidth: '90vw', wordBreak: 'break-word' }
      }} />
      {/* Header */}
      <header className="bg-base-100 shadow border-b border-base-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className={`text-3xl font-bold text-base-content ${pt_sans.className}`}>Testimonial Management</h1>
            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 alert alert-error shadow-sm text-sm">{error}</div>
        )}
        {/* Tabs */}
        <div className="border-b border-base-300 mb-6">
          <nav className="-mb-px flex space-x-8">
            {['pending', 'approved', 'rejected'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'pending' | 'approved' | 'rejected')}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-base-content/60 hover:text-base-content hover:border-base-300'
                }`}
              >
                {tab} ({testimonials.filter(t => t.status.toLowerCase() === tab).length})
              </button>
            ))}
          </nav>
        </div>
        {/* Testimonials List */}
        <div className="bg-base-100 shadow-xl sm:rounded-xl border border-base-300">
          {activeTab === 'rejected' && filteredTestimonials.length > 0 && (
            <div className="flex items-center px-6 pt-4 pb-2 gap-4">
              <input
                type="checkbox"
                checked={selectedIds.length === filteredTestimonials.length}
                onChange={handleSelectAll}
                className="checkbox checkbox-sm"
                aria-label="Select all rejected testimonials"
              />
              <span className="text-sm">Select All</span>
              <button
                className="btn btn-error btn-sm ml-auto disabled:opacity-50"
                disabled={selectedIds.length === 0}
                onClick={handleBulkDelete}
              >
                Delete Selected
              </button>
            </div>
          )}
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-base-content/60">No {activeTab} testimonials found.</p>
            </div>
          ) : (
            <ul className="divide-y divide-base-300">
              {filteredTestimonials.map((testimonial) => (
                <li key={testimonial.id} className="px-6 py-4 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {activeTab === 'rejected' && (
                        <input
                          type="checkbox"
                          className="checkbox checkbox-sm mr-3"
                          checked={selectedIds.includes(testimonial.id)}
                          onChange={() => handleSelect(testimonial.id)}
                          aria-label={`Select testimonial ${testimonial.id}`}
                        />
                      )}
                      <h3 className="text-lg font-semibold text-base-content">
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
                    <p className="text-sm text-base-content/70 mt-1">
                      {testimonial.role_company && testimonial.role_company}
                    </p>
                    <p className="text-sm text-base-content/60">
                      Censoring: {testimonial.censor_first_name ? 'First name' : ''} {testimonial.censor_last_name ? 'Last name' : ''} {!testimonial.censor_first_name && !testimonial.censor_last_name ? 'None' : ''}
                    </p>
                    <p className="mt-3 text-base-content">
                      &quot;{testimonial.testimonial}&quot;
                    </p>
                    <p className="text-xs text-base-content/40 mt-2">
                      Submitted: {new Date(testimonial.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  {/* Action Buttons */}
                  {testimonial.status === 'PENDING' && (
                    <div className="ml-6 flex flex-col gap-2">
                      <button
                        onClick={() => updateTestimonialStatus(testimonial.id, 'APPROVED')}
                        className="btn btn-success btn-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateTestimonialStatus(testimonial.id, 'REJECTED')}
                        className="btn btn-error btn-sm"
                      >
                        Reject
                        </button>
                    </div>
                  )}
                  {testimonial.status === 'APPROVED' && (
                    <div className="ml-6 flex flex-col gap-2">
                      <button
                        onClick={() => updateTestimonialStatus(testimonial.id, 'PENDING')}
                        className="btn btn-warning btn-sm"
                      >
                        Retract to Pending
                      </button>
                      <button
                        onClick={() => updateTestimonialStatus(testimonial.id, 'REJECTED')}
                        className="btn btn-error btn-sm"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                  {testimonial.status === 'REJECTED' && (
                    <div className="ml-6 flex flex-col gap-2">
                      <button
                        onClick={() => updateTestimonialStatus(testimonial.id, 'APPROVED')}
                        className="btn btn-success btn-sm"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateTestimonialStatus(testimonial.id, 'PENDING')}
                        className="btn btn-warning btn-sm"
                      >
                        Move to Pending
                      </button>
                      <button
                        onClick={() => deleteTestimonial(testimonial.id)}
                        className="btn btn-outline btn-error btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
