import React from 'react'
import styles from '../styles/sidebar.module.css'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import IconButton, { BigIconButton } from '../components/IconButton'
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

export default function Sidebar() {
    return (
        <section className={className}>
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
        </section>
    )
}
