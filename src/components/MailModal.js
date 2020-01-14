import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render';
import { PrimaryButton } from './Button';
import { TeamSearchBar } from './SearchBar';
import styles from '../styles/mail-modal.module.css'
import gmail from '../images/gmail.svg'
import office from '../images/office.svg'
import outlook from '../images/outlook.svg'
import teamBanner from '../images/team-banner.png'

const className = styles['connectMail'];
const goBack = () => navigate('/dashboard');
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

function TypeButton({ checked, secured, setActive, position }) {
    const active = checked[position];
    const type = active ? 'radio_button_checked' : 'radio_button_unchecked';
    const title = secured ? 'Yes, this is a private account.' : 'No, this is a shared account.';
    const subtitle = secured ? 'Messages will be private unless you share them.' : 'Select who has access.';
    const selectOption = () => {
        const selections = [false, false];
        selections[position] = !active;
        setActive(selections);
    }

    return (
        <button className={styles['typeButton']} onClick={selectOption}>
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
    const [active, setActive] = useState([false, false]);
    const disabled = !active[0] && !active[1];
    const onClick = disabled ? null : active[0] ? goBack : goToAccess;

    return (
        <div className={className}>
            <Helmet>
                <title>Select account type</title>
            </Helmet>

            <h4>
                Is this a private account?
            </h4>

            <div className={styles['inputWrapper']}>
                <TypeButton checked={active} secured={true} setActive={setActive} position={0} />
                <TypeButton checked={active} secured={false} setActive={setActive} position={1} />
            </div>

            <ShouldRender if={!disabled}>
                <PrimaryButton disabled={disabled} text="Continue" onClick={onClick} />
            </ShouldRender>
        </div>
    )
}

export function AccountAccessModal(props) {
    const [box, setBox] = useState(false);
    const onClickBox = () => setBox(!box);
    const boxState = box ? 'check_box' : 'check_box_outline_blank';
    const iconClass = `material-icons ${box ? 'text-highlight-500' : 'text-gray-300'}`;
    const goToSetup = () => navigate(
        '/dashboard/team/create',
        {
            state: { back: props.location.pathname }
        }
    );

    return (
        <div className={className}>
            <Helmet>
                <title>Provide Access</title>
            </Helmet>

            <h4>
                Who has access to the account?
            </h4>

            <p>
                <button onClick={onClickBox}>
                    <i className={iconClass}>{boxState}</i>
                    Everyone on the team
                </button>
            </p>

            <div className={styles['teamBox']}>
                <TeamSearchBar />

                <div>
                    <img src={teamBanner} alt="team banner" />
                    <p>You have no team members yet.</p>
                    <button onClick={goToSetup}>
                        Set up my team
                    </button>
                </div>
            </div>

            <PrimaryButton text="Continue" onClick={goBack} />
        </div>
    )
}
