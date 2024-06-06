import { sections } from '@/app/normal-header/sections-data';
import { Contents } from '@/features/normal-header/main/contents';
import { RightSidePanel } from '@/features/normal-header/main/right-side-panel';
import styles from './styles.module.css';

export default function NormalHeaderHome() {
  return (
    <div>
      <div className={styles.main}>
        <Contents />
        <RightSidePanel sections={sections} />
      </div>
    </div>
  );
}
