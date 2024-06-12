'use client';

import { IconButton } from '@/components/dashboard/elements/buttons/icon-button';
import { Bell } from '@/components/dashboard/icons/bell';
import { Loupe } from '@/components/dashboard/icons/loupe';
import { UnionJack } from '@/components/dashboard/icons/union-jack';
import { SearchBar } from '@/features/dashboard/header/search-bar';
import { useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  const toggleSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const closeSearch = () => {
    setIsSearch(false);
  };

  return (
    <header className={styles.root}>
      <div className={styles.wrap}>
        <button className={styles.button} onClick={toggleSearch}>
          <Loupe />
        </button>
        <SearchBar isVisible={isSearch} onClose={closeSearch} />
        <div className={styles.icons}>
          <IconButton icon={<UnionJack />} />
          <IconButton icon={<Bell />} />
          <IconButton icon={<div className={styles.icon}>icon</div>} />
        </div>
      </div>
    </header>
  );
};
