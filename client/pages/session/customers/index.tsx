import CustomerProfile from "./components/customerProfile/customerProfile";
import React from 'react';
import CustomerNavigation from "./components/customerNavigation/customerNavigation";
import Alert from "../../../shared/alert/alert";
import styles from './index.module.css';
import { CustomerContextProvider } from "../../../contexts/customerContext";
import Sections from "./sections";

export default function Customers() {
    
    return (
        <div>
            <Alert />

            <CustomerContextProvider>
                <div className={styles.customer__layout}>
                    <CustomerProfile />
                    <div>
                        <CustomerNavigation />
                        <Sections />
                    </div>
                </div>
            </CustomerContextProvider>

        </div>
    )
}
