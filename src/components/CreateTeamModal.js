import React from 'react'
import { navigate } from 'gatsby'
import { Helmet } from 'react-helmet'
import styles from '../styles/create-team.module.css'
import { CloseModalButton } from './IconButton';
import { PrimaryButton } from './Button';
import teamBanner from '../images/team-banner.png'

const className = styles['createTeam'];

export default function CreateTeamModal(props) {
    const goBack = () => navigate('dashboard/');

    return (
        <div className={className}>
            <Helmet>
                <title>Setup your team</title>
            </Helmet>
            
            <div className={styles['closeWrapper']}>
                <CloseModalButton onClick={goBack} />
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
