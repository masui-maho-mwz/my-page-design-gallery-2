import { AbstractLogo } from '@/components/mega-menu-header/logos/teq-quest-logos';
import Link from 'next/link';
import styles from './styles.module.css';

type Link = {
  id: number;
  url: string;
  text: string;
};

type Props = {
  links: Link[];
};

export const Options = ({ links }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <AbstractLogo />
        </div>
        <small>Copyright ©xxxx Corporation. All rights reserved.</small>
      </div>
      <ul className={styles.lists}>
        {links.map(({ id, url, text }) => (
          <li key={id} className={styles.list}>
            <Link href={url} className={styles.link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
