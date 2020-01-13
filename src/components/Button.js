import React from 'react'
import styles from '../styles/button.module.css'

const primary = styles['primary'];
const secondary = styles['secondary'];

export function PrimaryButton({ text, onClick }) {
    return (
        <button className={primary} onClick={onClick}>
            {text}
        </button>
    )
}

export function SecondaryButton({ text, onClick }) {
    return (
        <button className={secondary} onClick={onClick}>
            {text}
        </button>
    )
}
