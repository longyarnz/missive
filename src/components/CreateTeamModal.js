import React from 'react'
import styles from '../styles/create-team.module.css'
import { CloseModalButton } from './IconButton';
import { PrimaryButton } from './Button';
import teamBanner from '../images/team-banner.png'

const className = styles['createTeam'];

export default function CreateTeamModal() {
    return (
        <div className={className}>
            <div className={styles['closeWrapper']}>
                <CloseModalButton />
            </div>

            <div className={styles['imgWrapper']}>
                <img src={teamBanner} alt="team banner"/>
            </div>

            <h4>
                What’s the team’s name?
            </h4>

            <div className={styles['inputWrapper']}>
                <input type="text" name="team" spellCheck="false" />
            </div>

            <PrimaryButton text="Continue" />
        </div>
    )
}
