import React, { Fragment } from 'react'
import gmail from '../images/gmail.svg'
import office from '../images/office.svg'
import outlook from '../images/outlook.svg'
import styles from '../styles/mail-list.module.css'
import { FlatList } from '@bit/lekanmedia.shared-ui.internal.utils'
import ShouldRender from '@bit/lekanmedia.shared-ui.internal.should-render'

const days = [ 'Yesterday', 'Today' ];

const mails = [
    {
        title: 'Google',
        subtitle: 'Security Alert',
        time: '15:21',
        logo: gmail,
        text: 'Mailer was granted access to your google calendar via mobile device',
        read: false
    },
    {
        title: 'Office',
        subtitle: 'Enjoy Office365 Premium',
        time: '04:39',
        logo: office,
        text: 'Exactly 3 months since you signed up for Office365 from your windows 10 PC',
        read: true
    },
    {
        title: 'Outlook',
        subtitle: 'Happy new year from Outlook 🎉',
        time: '14:34',
        logo: outlook,
        text: 'Mailer was granted access to your google calendar via mobile device',
        read: true
    },
    {
        title: 'Google',
        subtitle: 'Security Alert',
        time: '01:55',
        logo: gmail,
        text: 'Mailer was granted access to your google calendar via mobile device',
        read: true
    },
    {
        title: 'Outlook',
        subtitle: 'Happy new year from Outlook 🎉',
        time: '11:11',
        logo: outlook,
        text: 'Mailer was granted access to your google calendar via mobile device',
        read: false
    },
    {
        title: 'Office',
        subtitle: 'Enjoy Office365 Premium',
        time: '17:36',
        logo: office,
        text: 'Exactly 3 months since you signed up for Office365 from your windows 10 PC',
        read: false
    },
    {
        title: 'Outlook',
        subtitle: 'Happy new year from Outlook 🎉',
        time: '14:34',
        logo: outlook,
        text: 'Mailer was granted access to your google calendar via mobile device',
        read: true
    },
    {
        title: 'Google',
        subtitle: 'Security Alert',
        time: '15:21',
        logo: gmail,
        text: 'Mailer was granted access to your google calendar via mobile device',
        read: false
    },
    {
        title: 'Office',
        subtitle: 'Enjoy Office365 Premium',
        time: '17:36',
        logo: office,
        text: 'Exactly 3 months since you signed up for Office365 from your windows 10 PC',
        read: false
    },
]

const wrapper = styles['wrapper'];

function DayHeader({ day }) {
    return (
        <h6 className={styles['dayHeader']}>{day()}</h6>
    )
}

function SubjectTab({ title, subtitle, text, time, logo, read }) {
    const className = `${styles['subjectTab']} ${read ? 'bg-gray-100' : 'bg-white'}`;

    return (
        <figure className={className}>
            <img src={logo} alt="mail logo" />
            <figcaption>
                <h5>
                    <span>{title}</span>
                    <span>{time}</span>
                </h5>
                <h6>{subtitle}</h6>
                <span>{text}</span>
            </figcaption>
        </figure>
    )
}

export default function MailList() {
    return (
        <section className={wrapper}>
            <FlatList
                list={mails}
                listView={(i, o) => (
                    <Fragment key={i.time}>
                        <ShouldRender if={o === 0 || o === 3}>
                            <DayHeader day={() => days.pop()} />
                        </ShouldRender>

                        <SubjectTab
                            title={i.title}
                            subtitle={i.subtitle}
                            time={i.time}
                            logo={i.logo}
                            text={i.text}
                            read={i.read}
                        />
                    </Fragment>
                )}
            />
        </section>
    )
}
