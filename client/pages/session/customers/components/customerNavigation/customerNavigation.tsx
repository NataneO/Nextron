import styles from './style.module.css'

export default function CustomerNavigation() {
  return (
    <nav className={styles.customerNavigation}>
      <ul className={styles.customerNavigation__list}>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Overview</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Orders</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Payment methods</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Chargebacks</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Locations</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Devices</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Sessions</span>
        </li>
        <li className={styles.customerNavigation__item}>
          <span className={styles.customerNavigation__link}>Show more</span>
        </li>
      </ul>
    </nav>
  );
}
