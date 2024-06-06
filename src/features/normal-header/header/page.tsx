import { Navigation } from '@/features/normal-header/header/navigation';
import { TopHeader } from '@/features/normal-header/header/top-header';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.root}>
      <TopHeader />
      <Navigation items={items} />
    </div>
  );
};

const items = [
  { id: 1, label: 'nav1', href: '#' },
  { id: 2, label: 'nav2', href: '#' },
  { id: 3, label: 'nav3', href: '#' },
  { id: 4, label: 'nav4', href: '#' },
  { id: 5, label: 'nav5', href: '#', isNew: true },
  { id: 6, label: 'nav6', href: '#' },
];
