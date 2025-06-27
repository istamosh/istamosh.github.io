import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin access for portfolio management",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  // Redirect to login page by default
  redirect('/admin/login');
}
