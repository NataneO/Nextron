import styles from './index.module.css'
import { useContext } from 'react';
import UserContext from '../../../contexts/userContext';

type Props = {
    user: any;
    message: string | null;
    isFetching: boolean;
};

export default function Overview(props: Props) {
    const { user, message, isFetching } = useContext(UserContext);
    {
        return (
            <h1>Welcome, {user && user.name}</h1>
        )
    }
}
