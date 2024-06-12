import { Header } from '@/features/dashboard/header';
import { LeftNavigation } from '@/features/dashboard/left-navigation';
import styles from './layout.module.css';

export default function DashBoardMenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <LeftNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
