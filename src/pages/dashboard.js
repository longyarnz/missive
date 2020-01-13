import React from 'react'
import Sidebar from '../components/Sidebar'
import Subject from '../components/Subject'
import View from '../components/View'
import Modals from '../components/Modals'
import styles from '../styles/dashboard.module.css'

export default function Dashboard(props) {
    const className = `${styles['section']}`;
    return (
        <section className={className}>
            <Sidebar />
            <Subject />
            <View />
            <Modals location={props.location} />
        </section>
    )
}
