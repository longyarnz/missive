import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import { CloseModalButton } from './IconButton';
import { PrimaryButton } from './Button';
import styles from '../styles/mail-modal.module.css'
import teamBanner from '../images/team-banner.png'
import gmail from '../images/gmail.svg'
import office from '../images/office.svg'
import outlook from '../images/outlook.svg'

const emails = {};
const className = styles['connectMail'];
const goBack = () => navigate('/dashboard/');

function MailButton({ src, alt, text }) {
    return (
        <button className={styles['mailButton']}>
            <img src={src} alt={alt}/>
            <span>{text}</span>
        </button>
    )
}

export function ConnectMailModal() {
    return (
        <div className={className}>
            <Helmet>
                <title>Connect an account</title>
            </Helmet>

            <h4>
                Add an account
            </h4>

            <div className={styles['inputWrapper']}>
                <MailButton text="Gmail" alt="Gmail Icon" src={gmail} />
                <MailButton text="Outlook" alt="Outlook Icon" src={outlook} />
                <MailButton text="Office 365" alt="Office365 Icon" src={office} />
            </div>
        </div>
    )
}
