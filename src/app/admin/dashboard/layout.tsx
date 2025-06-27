import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard for managing portfolio content",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
