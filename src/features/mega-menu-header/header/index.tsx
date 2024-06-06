import { AbstractLogo } from '@/components/mega-menu-header/logos/teq-quest-logos';
import { MenuList } from '@/features/mega-menu-header/header/menu-list';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <div>megamenu</div>
      <MenuList />
    </div>
  );
};
