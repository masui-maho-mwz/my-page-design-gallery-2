import { Button } from '@/components/mega-menu-header/elements/buttons/button';
import { Loupe } from '@/components/mega-menu-header/icons/loupe';
import Link from 'next/link';
import styles from './styles.module.css';

type Item = {
  id: number;
  name: string;
  href: string;
};

type Props = {
  items: Array<Item[]>;
};

const NavList = ({ items }: { items: Item[] }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, name, href }) => (
        <li key={id} className={styles.item}>
          <Link href={href} className={styles.link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SearchForm = () => (
  <form className={styles.form}>
    <input type="text" placeholder="何かお探しですか？" className={styles.input} />
    <div className={styles.loupe}>
      <Loupe />
    </div>
    <div>
      <Button type="button" value="検索" color="white" backgroundColor="black" className={styles.button} />
    </div>
  </form>
);

export const NavAndSearch = ({ items }: Props) => {
  return (
    <nav className={styles.root}>
      <div className={styles.lists}>
        {items.map((navItems, index) => (
          <NavList key={index} items={navItems} />
        ))}
      </div>
      <div>
        <SearchForm />
      </div>
    </nav>
  );
};
