import { SliderComponent } from '@/components/mega-menu-header/slider/page';
import styles from './styles.module.css';

const images = [
  { id: 1, src: '/images/green.jpg', alt: 'green' },
  { id: 2, src: '/images/red.jpg', alt: 'red' },
  { id: 3, src: '/images/water.jpg', alt: 'water' },
];

export default function MegaMenuHeader() {
  return (
    <div className={styles.root}>
      <SliderComponent images={images} />
      <div className={styles.main}>main</div>
    </div>
  );
}
