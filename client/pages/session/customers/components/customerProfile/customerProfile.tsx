import styles from './customerProfile.module.css'
import Image from 'next/image';



export default function CustomerProfile() {
  return (
    <section className={styles.customer__card}>
      <div className={styles.customer__location}></div>
      <article className={styles.customer__info}>
        <div className={styles.customer__data}>
          <div className={styles.customer__photo}>
            <Image src="/logo.png" width={90} height={90} />
          </div>
          <div className={styles.customer__personalInfo}>
            <div>
              <h1 className={styles.customer__name}>Natane Oliveira</h1>
              <h3 className={styles.customer__username}>nataneO</h3>
            </div>
            <button className={styles.customer__showInfo}>
              <i className="fa-solid fa-eye"></i>
            </button>
          </div>
          <div className={styles.customer__contactInfo}>
            <p className={styles.customer__email}>nataneoliveira9@gmail.com</p>
            <p className={styles.customer__telephone}>+55(11)99482-1699</p>
          </div>
        </div>
        <button className={styles.customer__addTag}>+ add a tag</button>
        <div className={styles.customer__additionalInfo}>
          <div>
            <div>
              <h5 className={styles.customer__accountAgeTitle}>Account age</h5>
              <h5 className={styles.customer__accountAge}>day</h5>
            </div>
            <div>
              <h5 className={styles.customer__avgOrderValueTitle}>Average order value</h5>
              <h5 className={styles.customer__avgOrderValue}>247</h5>
            </div>
          </div>
          <div>
            <div>
              <h5 className={styles.customer__lifetimeSpendTitle}>Total lifetime spend</h5>
              <h5 className={styles.customer__lifetimeSpend}>fdsf</h5>
            </div>
          </div>

        </div>
      </article>
    </section>
  )
}
