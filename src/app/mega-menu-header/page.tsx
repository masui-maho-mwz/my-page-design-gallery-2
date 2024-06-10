import { SliderComponent } from '@/app/mega-menu-header/slider/page';
import styles from './styles.module.css';

export default function MegaMenuHeader() {
  return (
    <div className={styles.root}>
      <SliderComponent />
      <div className={styles.main}>main</div>
    </div>
  );
}
