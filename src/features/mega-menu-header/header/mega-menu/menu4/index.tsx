import { MenuListContainer } from '@/features/mega-menu-header/header/mega-menu/menu-list-container';
import { faq1, faq2, terms1, terms2 } from '@/features/mega-menu-header/header/mega-menu/menu4/menu4-data';
import styles from './styles.module.css';

export const Menu4 = () => {
  return (
    <div className={styles.root}>
      <MenuListContainer title="よくある質問" items={[faq1, faq2]} width={450} showBorderRight={true} />
      <MenuListContainer title="利用規約" items={[terms1, terms2]} width={450} showBorderRight={false} />
    </div>
  );
};
