import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../components/Sidebar'
import Subject from '../components/Subject'
import View from '../components/View'
import Modals from '../components/Modals'
import styles from '../styles/dashboard.module.css'

export default function Dashboard(props) {
    const className = `${styles['section']}`;
    return (
        <section className={className}>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Sidebar location={props.location} />
            <Subject />
            <View />
            <Modals location={props.location} />
        </section>
    )
}
