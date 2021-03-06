import React from 'react'
import { navigate } from 'gatsby'
import SearchBar from './SearchBar'
import { SecondaryButton } from './Button';
import MailList from './MailList';
import styles from '../styles/subject.module.css'
import welcome from '../images/welcome.png'

const className = styles['subject'];
const connectAccount = () => navigate('/dashboard/account/connect');

export function Welcome() {
    return (
        <section className={className}>
            <div>
                <SearchBar />
                <img src={welcome} alt="welcome"/>
                <h2>Welcome to your mailx dashboard.</h2>
                <p>Connect an account to start managing your email.</p>
                <SecondaryButton text="Connect an account" onClick={connectAccount} />
            </div>
        </section>
    )
}

export function Inbox() {
    return (
        <section className={className}>
            <div>
                <SearchBar />
                <MailList />
            </div>
        </section>
    )
}
