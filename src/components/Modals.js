import React from 'react'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'
import { CreateTeamModal, InviteMembersModal, CompleteSetupModal } from './TeamModal'
import { ConnectMailModal } from './MailModal.js'
import styles from '../styles/modals.module.css'

const className = styles['modals'];

export default function Modals(props) {
    const { pathname } = props.location;
    const createTeam = pathname.includes('/team/create');
    const inviteMembers = pathname.includes('/team/invite');
    const completeSetup = pathname.includes('/team/complete');
    const connectAccount = pathname.includes('/account/connect');

    if (/dashboard(\/*)$/.test(pathname)) return null;

    return (
        <section className={className}>
            <ShouldRender if={createTeam}>
                <CreateTeamModal />
            </ShouldRender> 

            <ShouldRender if={inviteMembers}>
                <InviteMembersModal />
            </ShouldRender> 

            <ShouldRender if={completeSetup}>
                <CompleteSetupModal />
            </ShouldRender> 

            <ShouldRender if={connectAccount}>
                <ConnectMailModal />
            </ShouldRender> 
        </section>
    )
}
