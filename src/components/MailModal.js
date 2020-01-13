import React from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import { PrimaryButton } from './Button';
import styles from '../styles/mail-modal.module.css'
import gmail from '../images/gmail.svg'
import office from '../images/office.svg'
import outlook from '../images/outlook.svg'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render';

const className = styles['connectMail'];
const goToType = () => navigate('/dashboard/account/type');
const goToAccess = () => navigate('/dashboard/account/access');

function MailButton({ src, alt, text, onClick }) {
    return (
        <button className={styles['mailButton']} onClick={onClick}>
            <img src={src} alt={alt} />
            <span>{text}</span>
        </button>
    )
}

function TypeButton({ checked, secured, onClick }) {
    const type = checked ? 'radio_button_checked' : 'radio_button_unchecked';
    const title = secured ? 'Yes, this is a private account.' : 'No, this is a shared account.';
    const subtitle = secured ? 'Messages will be private unless you share them.' : 'Select who has access.';

    return (
        <button className={styles['typeButton']} onClick={onClick}>
            <i className="material-icons">{type}</i>
            <span>
                <h5>{title}</h5>
                <span>
                    {subtitle}
                    <ShouldRender if={!secured}>
                        <i className="material-icons">navigate_next</i>
                    </ShouldRender>
                </span>
            </span>
        </button>
    )
}

export function ConnectMailModal() {
    return (
        <div className={className}>
            <Helmet>
                <title>Connect your email</title>
            </Helmet>

            <h4>
                Add an account
            </h4>

            <div className={styles['inputWrapper']}>
                <MailButton text="Gmail" alt="Gmail Icon" src={gmail} onClick={goToType} />
                <MailButton text="Outlook" alt="Outlook Icon" src={outlook} onClick={goToType} />
                <MailButton text="Office 365" alt="Office365 Icon" src={office} onClick={goToType} />
            </div>
        </div>
    )
}

export function AccountTypeModal() {
    return (
        <div className={className}>
            <Helmet>
                <title>Select account type</title>
            </Helmet>

            <h4>
                Is this a private account?
            </h4>

            <div className={styles['inputWrapper']}>
                <TypeButton checked={false} secured={true} onClick={goToType} />
                <TypeButton checked={false} secured={false} onClick={goToType} />
            </div>

            <PrimaryButton text="Continue" onClick={goToAccess} />
        </div>
    )
}
