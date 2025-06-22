'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from '@/utils/axios';
import { pt_sans } from '@/app/fonts';

interface LoginFormData {
  username: string;
  password: string;
}

export default function AdminLoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/user/login', formData);
      
      if (response.status === 200) {
        // No need to store token - it's in httpOnly cookie
        // Redirect to admin dashboard
        router.push('/admin/dashboard');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.error || error.response.data.message || 'Login failed. Please try again.');
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-base-100 border border-base-300">
        <div className="card-body">
          <h2 className={`text-center text-3xl font-bold mb-2 ${pt_sans.className} text-base-content`}>Admin Login</h2>
          <p className="text-center text-base-content/70 mb-6 text-sm">
            Access the testimonial management dashboard
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="username" className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="input input-bordered w-full"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                autoComplete="username"
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="input input-bordered w-full"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                autoComplete="current-password"
              />
            </div>
            {error && (
              <div className="alert alert-error shadow-sm text-sm">{error}</div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
