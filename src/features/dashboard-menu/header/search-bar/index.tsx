import { Button } from '@/components/dashboard-menu/elements/buttons/button';
import { Loupe } from '@/components/dashboard-menu/icons/loupe';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

export const SearchBar = ({ isVisible, onClose }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutSide = (event: MouseEvent) => {
    if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isVisible) return;

    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.wrap}>
        <div className={styles.icon}>
          <Loupe />
        </div>
        <input type="" placeholder="Search..." className={styles.input} />
      </div>
      <Button
        type="button"
        value="Search"
        color="rgb(255, 255, 255)"
        backgroundColor="rgb(24, 119, 242)"
        border="1px solid rgb(24, 119, 242)"
      />
    </div>
  );
};
