import { DashBoard } from '@/features/dashboard-menu/dashboard';
import { Header } from '@/features/dashboard-menu/header';
import styles from './layout.module.css';

export default function DashBoardMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <DashBoard />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
