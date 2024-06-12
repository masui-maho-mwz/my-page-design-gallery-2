'use client';

import Link from 'next/link';
import { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (id: number) => {
    setActiveIndex(id);
  };

  return (
    <nav className={styles.root}>
      {items.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          className={`${styles.link} ${id === activeIndex ? styles.active : ''}`}
          onClick={() => handleClick(id)}
        >
          <div className={styles.label}>{label}</div>
        </Link>
      ))}
    </nav>
  );
};
