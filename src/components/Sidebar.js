import React from 'react'
import { navigate } from 'gatsby'
import styles from '../styles/sidebar.module.css'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'
import IconButton, { BigIconButton } from '../components/IconButton'
import { UserMenu, TeamMenu } from '../components/UserMenu'
import plus from '../images/plus.svg'
import file from '../images/file.svg'
import inbox from '../images/inbox.svg'
import archive from '../images/archive.svg'
import send from '../images/send.svg'
import target from '../images/target.svg'
import octagon from '../images/octagon.svg'

const className = `${styles['section']}`;
const items = [
    {
        icon: inbox,
        text: 'Inbox'
    },
    {
        icon: octagon,
        text: 'Unassigned'
    },
    {
        icon: target,
        text: 'Assigned'
    },
    {
        icon: file,
        text: 'Drafts'
    },
    {
        icon: send,
        text: 'More'
    },
    {
        icon: archive,
        text: 'All'
    },
]

export default function Sidebar({ location }) {
    const goToSetup = () => navigate(
        '/dashboard/team/create',
        {
            state: { back: location.pathname }
        }
    );

    const inbox = location.pathname.includes('inbox');

    return (
        <section className={className}>
            <div>
                <BigIconButton icon={plus} text="Compose" />

                <ul>
                    <FlatList
                        list={items}
                        listView={i => (
                            <li key={i.text} className="focus-within:border-black">
                                <IconButton text={i.text} icon={i.icon} />
                            </li>
                        )}
                    />
                </ul>

                <div>
                    <h6>Teams</h6>

                    <ShouldRender if={inbox}>
                        <TeamMenu name="Obi Nathaniel Ndubisi" />
                    </ShouldRender>

                    <ShouldRender if={!inbox}>
                        <p>
                            Invite your teammates to collaborate.
                        </p>

                        <button onClick={goToSetup}>
                            Set up my team
                        </button>
                    </ShouldRender>
                </div>
            </div>

            <UserMenu name="Obi Nathaniel Ndubisi" />
        </section>
    )
}
