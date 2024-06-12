'use client';

import { AbstractLogo } from '@/components/mega-menu-header/logos/teq-quest-logos';
import { MegaMenu } from '@/features/mega-menu-header/header/mega-menu';
import { MenuList } from '@/features/mega-menu-header/header/menu-list';
import { useState } from 'react';
import styles from './styles.module.css';

export const Header = () => {
  const [isHovering, setIsHovering] = useState<string | null>(null);

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <AbstractLogo />
      </div>
      <MegaMenu isHovering={isHovering} setIsHovering={setIsHovering} />
      <MenuList setIsHovering={setIsHovering} />
    </div>
  );
};
