import React from 'react'
import { Link, navigate } from 'gatsby'
import styles from '../styles/form.module.css'
import caption from '../images/forgot.png'

export default function ForgotPassword() {
    const className = `${styles['section']} container mx-auto`;

    const resetPassword = e => {
        e.preventDefault();
        navigate('/reset', { replace: true });
    }

    return (
        <section className={className}>
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>Let's get you back into <br /> your account.</h1>
                <h2>Enter the email you registered your <br /> account with.</h2>
                <form method="post" onSubmit={resetPassword}>
                    <input type="email" name="email" placeholder="Email Address" required />
                    <input className={styles['reset']} type="submit" value="Send reset password link"/>
                    <footer className="text-center">
                        <Link to="/login">Back to log in</Link>
                    </footer>
                </form>
            </div>
        </section>
    )
}
