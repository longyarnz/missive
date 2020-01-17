import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from '../styles/form.module.css'
import caption from '../images/forgot.png'

export default function SendLink() {
    const [success, setSuccess] = useState(null);
    const className = `${styles['section']} ${styles['sent']} container mx-auto`;

    const resetPassword = e => {
        e.preventDefault();
        setSuccess('Reset link has been sent to your email');
    }

    return (
        <section className={className}>
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>We’ve sent you a <br /> password reset link.</h1>
                <h2>Click the reset link in the email to <br /> create a new password for your account.</h2>
                <form method="post" onSubmit={resetPassword}>
                    <footer className="text-center">
                        <Link to="/login">Resend Link</Link>
                    </footer>
                </form>
            </div>
        </section>
    )
}
