import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>Page Design Gallary</h2>
        <ol>
          {links.map(({ href, label }) => (
            <li key={href} className={styles.list}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const links = [
  { href: './normal-header', label: 'normal-header' },
  { href: './mega-menu-header', label: 'mega-menu-header' },
  { href: './dashboard-menu', label: 'dashboard' },
];
