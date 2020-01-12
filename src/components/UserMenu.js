import React from 'react'
import styles from '../styles/user-menu.module.css'
import placeholder from '../images/avatar.png'

export default function UserMenu({ src, name }) {
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
