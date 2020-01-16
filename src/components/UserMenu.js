import React from 'react'
import styles from '../styles/user-menu.module.css'
import placeholder from '../images/avatar.png'

export function UserMenu({ src, name }) {
    const className = styles['userMenu'];
    src = src || placeholder;
    return (
        <footer className={className}>
            <img src={src} alt="avatar"/>
            <span>{name}</span>
            <i className="material-icons">more_vert</i>
        </footer>
    )
}

export function TeamMenu({ src, name }) {
    const className = `${styles['userMenu']} ${styles['teamMenu']}`;
    src = src || placeholder;
    return (
        <p className={className}>
            <img src={src} alt="avatar"/>
            <span>{name}</span>
            <i className="material-icons">more_horiz</i>
        </p>
    )
}
