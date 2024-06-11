import { Button } from '@/components/dashboard-menu/elements/buttons/button';
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
      <Button
        type="button"
        value="Search"
        color="rgb(255, 255, 255)"
        backgroundColor="rgb(24, 119, 242)"
        border="1px solid rgb(24, 119, 242)"
      />
    </div>
  );
};
