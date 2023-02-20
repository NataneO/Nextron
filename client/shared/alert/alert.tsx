import styles from './alert.module.css'
export default function Alert() {
    return (
        <div className={styles.customer__alert}>

            <i className="fa-regular fa-circle-xmark"></i>
            <div>
            <h5>Unreviewed customer</h5>
            <h6>This is an unreviewed customer. Click 'Review' to mark this customer.</h6>
            </div>
        </div>

    );
}
