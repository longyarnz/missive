import React from 'react'
import styles from '../styles/icon-button.module.css'

export default function IconButton({ text, icon, className = '' }) {
    className += ` ${styles['iconButton']}`;

    return (
        <button className={className}>
            <img src={icon} alt="icon"/>
            <span>{text}</span>
        </button>
    )
}

export function BigIconButton(props) {
    const className = `${styles['bigIconButton']} hover:bg-highlight-600 hover:shadow-lg`;
    return (
        <IconButton className={className} {...props} />
    )
}
