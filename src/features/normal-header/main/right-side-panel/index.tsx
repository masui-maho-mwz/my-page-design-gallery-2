import Link from 'next/link';
import styles from './styles.module.css';

type Section = {
  id: number;
  label: string;
  href: string;
  subSections?: { id: number; label: string; href: string }[];
};

type Props = {
  sections: Section[];
};

export const RightSidePanel = ({ sections }: Props) => {
  return (
    <div className={styles.root}>
      <ul>
        {sections.map(({ id, label, href, subSections }) => (
          <li key={id} className={styles.item}>
            <Link href={href} className={styles.link}>
              {label}
            </Link>
            {subSections && (
              <ul className={styles.index}>
                {subSections.map(({ id, label, href }) => (
                  <li key={id} className={styles.item}>
                    <Link href={href} className={styles.link}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
