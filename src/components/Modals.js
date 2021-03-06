import React from 'react'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'
import { CreateTeamModal, InviteMembersModal, CompleteSetupModal } from './TeamModal'
import { ConnectMailModal, AccountTypeModal, AccountAccessModal } from './MailModal.js'
import styles from '../styles/modals.module.css'

const className = styles['modals'];

export default function Modals(props) {
    const { pathname } = props.location;
    const createTeam = pathname.includes('/team/create');
    const inviteMembers = pathname.includes('/team/invite');
    const completeSetup = pathname.includes('/team/complete');
    const connectAccount = pathname.includes('/account/connect');
    const accountType = pathname.includes('/account/type');
    const access = pathname.includes('/account/access');

    if (!/dashboard\/(team|account)/.test(pathname)) return null;

    return (
        <section className={className}>
            <ShouldRender if={createTeam}>
                <CreateTeamModal location={props.location} />
            </ShouldRender> 

            <ShouldRender if={inviteMembers}>
                <InviteMembersModal location={props.location} />
            </ShouldRender> 

            <ShouldRender if={completeSetup}>
                <CompleteSetupModal location={props.location} />
            </ShouldRender> 

            <ShouldRender if={connectAccount}>
                <ConnectMailModal />
            </ShouldRender> 

            <ShouldRender if={accountType}>
                <AccountTypeModal />
            </ShouldRender> 

            <ShouldRender if={access}>
                <AccountAccessModal location={props.location} />
            </ShouldRender> 
        </section>
    )
}
