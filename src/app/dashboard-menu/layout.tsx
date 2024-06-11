import { DashBoard } from '@/features/dashboard-menu/dashboard';
import { Header } from '@/features/dashboard-menu/header';

export default function DashBoardMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <DashBoard />
      <main>{children}</main>
    </div>
  );
}
