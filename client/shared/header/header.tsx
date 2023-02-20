import styles from './header.module.css'

export default function Header() {
    return (
      <div>
        <header className={styles.header}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>Overview</li>
              <li className={styles.header__item}>Customers</li>
              <li className={styles.header__item}>Reports</li>
              <li className={styles.header__item}>Leaderboard</li>
              <li className={styles.header__item}>Tags</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
  