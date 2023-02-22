import styles from './style.module.css'
import CustomerContext from '../../../../../contexts/customerContext';
import { useContext, useState } from 'react';

export default function CustomerNavigation() {
  
  const {state, setState } = useContext(CustomerContext);

  const pages = [
    "Overview",
    "Orders",
    "Payment methods",
    "Chargebacks",
    "Locations",
    "Devices",
    "Sessions",
    "Show more"
  ];

  const handleChange = (pageName: string) => {
   setState({page:  formatString(pageName)})
  };

  function formatString(str: string) {
    return str.toLowerCase().split(' ').map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join('');
  }

  return (
   <nav className={styles.customerNavigation}>
      <ul className={styles.customerNavigation__list}>
        {pages.map((page, index) => (
          <li key={index} className={styles.customerNavigation__item}>
            <span className={styles.customerNavigation__link} onClick={() => handleChange(page)}>{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}