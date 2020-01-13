import React from 'react'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'
import { CreateTeamModal, InviteMembersModal } from './TeamModal'
import styles from '../styles/modals.module.css'

const className = styles['modals'];

export default function Modals(props) {
    const { pathname } = props.location;
    const createTeam = pathname.includes('/team/create');
    const inviteMembers = pathname.includes('/team/invite');

    if (/dashboard(\/*)$/.test(pathname)) return null;

    return (
        <section className={className}>
            <ShouldRender if={createTeam}>
                <CreateTeamModal />
            </ShouldRender> 

            <ShouldRender if={inviteMembers}>
                <InviteMembersModal />
            </ShouldRender> 
        </section>
    )
}
