import CustomerProfile from "./components/customerProfile/customerProfile";
import CustomerNavigation from "./components/customerNavigation/customerNavigation";
import Alert from "../../../shared/alert/alert";
import styles from './index.module.css'

export default function Customers() {
    return (
        <div>
            <Alert />
            <div className={styles.customer__layout}>
                <CustomerProfile />
                <CustomerNavigation />
            </div>
        </div>
    )
}
