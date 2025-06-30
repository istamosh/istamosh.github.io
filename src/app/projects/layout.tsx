import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';

export default function ProjectsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      {children}
    </div>
  );
}
