import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.lists}>ichiran</div>
        <form action="">
          <input type="text" />
          <button>検索</button>
        </form>
      </nav>
      <div>footer</div>
    </div>
  );
};
