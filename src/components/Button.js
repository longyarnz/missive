import React from 'react'
import styles from '../styles/button.module.css'

const primary = styles['primary'];
const secondary = styles['secondary'];

export function PrimaryButton({ text, onClick, disabled }) {
    return (
        <button className={primary} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export function SecondaryButton({ text, onClick, disabled }) {
    return (
        <button className={secondary} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}
