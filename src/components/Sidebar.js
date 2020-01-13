import React from 'react'
import {navigate } from 'gatsby'
import styles from '../styles/sidebar.module.css'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import IconButton, { BigIconButton } from '../components/IconButton'
import UserMenu from '../components/UserMenu'
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

export default function Sidebar(props) {
    const goToSetup = () => navigate(
        '/dashboard/team/create',
        {
            state: {back: props.location.pathname}
        }
    );

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

                    <p>
                        Invite your teammates to collaborate.
                    </p>

                    <button onClick={goToSetup}>
                        Set up my team
                    </button>
                </div>
            </div>

            <UserMenu name="Obi Nathaniel Ndubisi" />
        </section>
    )
}
