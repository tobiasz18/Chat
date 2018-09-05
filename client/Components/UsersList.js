import React from 'react';
import styles from '../styles/UsersList.css';

const UsersList = props => (

    <div className={styles.users}>
        <div className={styles.UsersOnline}>
            {props.users.length} people online
        </div>
        <ul className={styles.UsersList}>

            {
                props.users.map((user) => {
                    return (
                        <li key={user.id} className={styles.UserItem}>
                            {user.name}
                        </li>
                    );
                })
            }
        </ul>
    </div>
);

export default UsersList;
