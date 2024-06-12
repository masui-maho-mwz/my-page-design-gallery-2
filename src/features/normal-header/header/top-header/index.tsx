import { AbstractLogo } from '@/components/normal-header/logos/teq-quest-logos';
import styles from './styles.module.css';
import { Button } from '@/components/normal-header/elements/buttons/button';

export const TopHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <div className={styles.wrap}>
        <input type="text" placeholder="検索" className={styles.input} />
        <div className={styles.buttons}>
          <Button type="link" href="#" value="ログイン" color="#357a00" />
          <Button type="link" href="#" value="新規登録" backgroundColor="#357a00" color="rgb(255 255 255 / 92%)" />
        </div>
      </div>
    </div>
  );
};
