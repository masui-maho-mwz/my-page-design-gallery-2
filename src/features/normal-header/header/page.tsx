import { Navigation } from '@/features/normal-header/header/navigation';
import { TopHeader } from '@/features/normal-header/header/top-header';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.root}>
      <TopHeader />
      <Navigation />
    </div>
  );
};
