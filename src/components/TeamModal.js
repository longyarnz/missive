import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import { CloseModalButton } from './IconButton';
import { PrimaryButton } from './Button';
import styles from '../styles/create-team.module.css'
import teamBanner from '../images/team-banner.png'

const emails = {};
const className = styles['createTeam'];
const goBack = () => navigate('/dashboard/');
const addMails = ({ target }) => emails[target.name] = target.value;

export function CreateTeamModal({ location }) {
    const goToInvite = () => navigate('/dashboard/team/invite', { state: location.state });
    
    return (
        <div className={className}>
            <Helmet>
                <title>Setup your team</title>
            </Helmet>

            <div className={styles['closeWrapper']}>
                <CloseModalButton onClick={goBack} />
            </div>

            <div className={styles['imgWrapper']}>
                <img src={teamBanner} alt="team banner" />
            </div>

            <h4>
                What’s the team’s name?
            </h4>

            <div className={styles['inputWrapper']}>
                <input type="text" name="team" spellCheck="false" />
            </div>

            <PrimaryButton text="Continue" onClick={goToInvite} />
        </div>
    )
}

export function InviteMembersModal({ location }) {
    const [ people, setPeople ] = useState(1);
    const list = new Array(people).fill('');
    const goToComplete = () => navigate('/dashboard/team/complete', { state: location.state });
    
    return (
        <div className={`${className} ${styles['invite']}`}>
            <Helmet>
                <title>Invite Team Members</title>
            </Helmet>

            <div className={styles['closeWrapper']}>
                <CloseModalButton onClick={goBack} />
            </div>

            <div className={styles['imgWrapper']}>
                <img src={teamBanner} alt="team banner" />
            </div>

            <h4>
                Invite team members via <br /> their emails.
            </h4>

            <p>
                They’ll be sent a link to join this team.
            </p>

            <div className={styles['inputWrapper']}>
                <FlatList
                    list={list}
                    listView={(i, o) => (
                        <input 
                            key={`input-${o}`} 
                            type="email" 
                            name={`team${o}`} 
                            spellCheck="false" 
                            onChange={addMails}
                        />
                    )}
                />
            </div>

            <p>
                <button onClick={() => setPeople(people + 1)}>
                    Add more people.
                </button>
            </p>

            <PrimaryButton text="Invite People" onClick={goToComplete} />
        </div>
    )
}

export function CompleteSetupModal({ location }) {
    const url = (location && location.state && location.state.back) || '/dashboard';
    console.log(url);
    const goBackToAccess = () => navigate(url);
    const newClass = `${className} flex flex-col item-center justify-center`;
    
    return (
        <div className={newClass}>
            <Helmet>
                <title>Invites Sent</title>
            </Helmet>

            <div className={styles['imgWrapper']}>
                <img src={teamBanner} alt="team banner" />
            </div>

            <h4>
                Invites sent!
            </h4>

            <PrimaryButton text="Done" onClick={goBackToAccess} />
        </div>
    )
}