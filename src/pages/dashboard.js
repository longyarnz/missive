import React from 'react'
import Sidebar from '../components/Sidebar'
import Subject from '../components/Subject'
import View from '../components/View'
import styles from '../styles/dashboard.module.css'

export default function Dashboard() {
    const className = `${styles['section']}`;
    return (
        <section className={className}>
            <Sidebar />

            <Subject />

            <View />
        </section>
    )
}
