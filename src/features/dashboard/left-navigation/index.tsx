import { AbstractLogo } from '@/components/dashboard/logos/teq-quest-logos';
import { Nav } from '@/features/dashboard/left-navigation/nav';
import { Profile } from '@/features/dashboard/left-navigation/profile';
import styles from './styles.module.css';

export const LeftNavigation = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <Profile />
      <Nav items={items} />
    </div>
  );
};

const items = [
  { id: 1, label: 'ナビ１', href: '#' },
  { id: 2, label: 'ナビ２', href: '#' },
  { id: 3, label: 'ナビ３', href: '#' },
  { id: 4, label: 'ナビ４', href: '#' },
  { id: 5, label: 'ナビ５', href: '#' },
  { id: 6, label: 'ナビ６', href: '#' },
];
