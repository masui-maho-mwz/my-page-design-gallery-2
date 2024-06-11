import Link from 'next/link';
import styles from './styles.module.css';

type Item = {
  id: number;
  label: string;
  href: string;
};

type Props = {
  items: Item[];
};

export const Nav = ({ items }: Props) => {
  return (
    <nav className={styles.root}>
      {items.map(({ id, label, href }) => (
        <Link key={id} href={href} className={styles.link}>
          <div className={styles.label}>{label}</div>
        </Link>
      ))}
    </nav>
  );
};
