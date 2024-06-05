import { Contents } from '@/features/normal-header/main/contents';
import { RightSidePanel } from '@/features/normal-header/main/right-side-panel';
import styles from './styles.module.css';

export default function NormalHeaderHome() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <Contents />
        <RightSidePanel />
      </div>
    </div>
  );
}
