import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirect to login page by default
  redirect('/admin/login');
}
