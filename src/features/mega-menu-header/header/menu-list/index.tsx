'use client';

import { Button } from '@/components/mega-menu-header/elements/buttons/button';
import styles from './styles.module.css';

type MenuItem = {
  id: number;
  value: string;
  href: string;
  isMegaMenu?: boolean;
};

type Props = {
  setIsHovering: (isHovering: string | null) => void;
};

const menuItems: MenuItem[] = [
  { id: 1, value: 'リンク1', href: '' },
  { id: 2, value: 'リンク2', href: '' },
  { id: 3, value: 'リンク3', href: '', isMegaMenu: true },
  { id: 4, value: 'リンク4', href: '', isMegaMenu: true },
  { id: 5, value: 'リンク5', href: '' },
];

export const MenuList = ({ setIsHovering }: Props) => {
  return (
    <ul className={styles.root}>
      {menuItems.map((item) => (
        <li
          key={item.id}
          className={styles.list}
          onMouseEnter={() => item.isMegaMenu && setIsHovering(`megaMenu${item.id}`)}
          onMouseLeave={() => item.isMegaMenu && setIsHovering(null)}
        >
          <Button type="link" value={item.value} href={item.href} color="rgb(8, 96, 168)" className={styles.link} />
        </li>
      ))}
    </ul>
  );
};
