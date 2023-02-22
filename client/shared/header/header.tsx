import styles from './header.module.css'
import Link from 'next/link';

export default function Header() {
    return (
      <div>
        <header className={styles.header}>
          <nav className={styles.header__nav}>
            <ul className={styles.header__list}>
              <Link href="/session" className={styles.header__item}>Overview</Link>
              <Link href="/customers" className={styles.header__item}>Customers</Link>
              <Link href="/reports" className={styles.header__item}>Reports</Link>
              <Link href="/leaderboard" className={styles.header__item}>Leaderboard</Link>
              <Link href="/tags" className={styles.header__item}>Tags</Link>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
  