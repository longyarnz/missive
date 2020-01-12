import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/form.module.css'
import caption from '../images/caption.png'

export default function ForgotPassword() {
    return (
        <section className="container mx-auto">
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>Let's get you back into <br /> your account.</h1>
                <h2>Enter the email you registered your <br /> account with.</h2>
                <form method="post">
                    <input type="email" name="email" placeholder="Email Address" />
                    <input className={styles['reset']} type="button" value="Send reset password link"/>
                    <footer className="text-center">
                        <Link to="/login">Back to log in</Link>
                    </footer>
                </form>
            </div>
        </section>
    )
}
