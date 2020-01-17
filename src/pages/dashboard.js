import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'
import { Welcome, Inbox } from '../components/Subject'
import View from '../components/View'
import Modals from '../components/Modals'
import NotificationTab from '../components/NotificationTab'
import styles from '../styles/dashboard.module.css'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'

export default function Dashboard(props) {
    const { pathname } = props.location;
    const welcome = !pathname.includes('/dashboard/inbox');
    const inbox = pathname.includes('/dashboard/inbox');
    const className = `${styles['section']}`;

    return (
        <section className={className}>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <Sidebar location={props.location} />

            <ShouldRender if={welcome}>
                <Welcome />
            </ShouldRender>

            <ShouldRender if={inbox}>
                <Inbox />
            </ShouldRender>

            <View />

            <Modals location={props.location} />
        </section>
    )
}
