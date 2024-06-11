import { IconButton } from '@/components/dashboard-menu/elements/buttons/icon-button';
import { Bell } from '@/components/dashboard-menu/icons/bell';
import { Loupe } from '@/components/dashboard-menu/icons/loupe';
import { UnionJack } from '@/components/dashboard-menu/icons/union-jack';
import { SearchBar } from '@/features/dashboard-menu/header/search-bar';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <button className={styles.button}>
          <Loupe />
        </button>
        <SearchBar />
        <div className={styles.icons}>
          <IconButton icon={<UnionJack />} />
          <IconButton icon={<Bell />} />
          <IconButton icon={<div className={styles.icon}>icon</div>} />
        </div>
      </div>
    </header>
  );
};
