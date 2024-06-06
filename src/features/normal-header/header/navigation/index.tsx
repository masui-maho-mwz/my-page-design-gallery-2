import Link from 'next/link';
import styles from './styles.module.css';

type Item = {
  id: number;
  label: string;
  href: string;
  isNew?: boolean;
};
type Props = {
  items: Item[];
};

export const Navigation = ({ items }: Props) => {
  return (
    <nav className={styles.root}>
      {items.map(({ id, label, href, isNew }) => (
        <Link key={id} href={href} className={styles.item}>
          {label}
          {isNew && <span className={styles.chip}>NEW</span>}
        </Link>
      ))}
    </nav>
  );
};
