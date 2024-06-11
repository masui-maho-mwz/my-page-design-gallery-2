import { AbstractLogo } from '@/components/dashboard-menu/logos/teq-quest-logos';
import { Nav } from '@/features/dashboard-menu/dashboard/nav';
import { Profile } from '@/features/dashboard-menu/dashboard/profile';
import styles from './styles.module.css';

export const DashBoard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <Profile />
      <Nav items={Navitems} />
    </div>
  );
};

const Navitems = [
  { id: 1, label: 'ナビ１', href: '#' },
  { id: 2, label: 'ナビ２', href: '#' },
  { id: 3, label: 'ナビ３', href: '#' },
  { id: 4, label: 'ナビ４', href: '#' },
  { id: 5, label: 'ナビ５', href: '#' },
  { id: 6, label: 'ナビ６', href: '#' },
];
