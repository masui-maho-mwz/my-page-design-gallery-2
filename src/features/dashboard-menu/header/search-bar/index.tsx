import { Loupe } from '@/components/dashboard-menu/icons/loupe';
import styles from './styles.module.css';

export const SearchBar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.icon}>
          <Loupe />
        </div>
        <input type="" placeholder="Search..." className={styles.input} />
      </div>
      <button>search</button>
    </div>
  );
};
