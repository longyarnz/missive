import React from 'react'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'
import CreateTeamModal from './CreateTeamModal'
import styles from '../styles/modals.module.css'

const className = styles['modals'];

export default function Modals(props) {
    const { pathname } = props.location;
    const createTeam = pathname.includes('/team/create');

    return (
        <section className={className}>
            <ShouldRender if={createTeam}>
                <CreateTeamModal />
            </ShouldRender> 
        </section>
    )
}
