import React from 'react'
import styles from '../styles/notification-tab.module.css'

console.log(styles);

const className = styles['wrapper'];

function Tabs() {
    return (
        <div>
            <i className="material-icons">lock</i>
            <span>Your password was changed succesfully.</span>
            <footer>
                <span>
                    Just now.
            </span>
                <i className="material-icons">lock</i>
            </footer>
        </div>
    )
}

export default function NotificationTab() {

    return (
        <div className={className}>
            Notification
        </div>
    )
}
