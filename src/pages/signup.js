import React from 'react'
import styles from '../styles/signup.module.css'
import caption from '../images/caption.png'

export default function signup() {
    return (
        <section className={styles.section}>
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>Let's get you <br /> started.</h1>
                <form method="post">
                    <input type="email" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Create a Password" />
                    <input type="password" name="confirm" placeholder="Confirm Password" />
                    <input type="button" value="Create Account"/>
                    <footer>Already have an account?&nbsp;<span>Log in</span></footer>
                </form>
            </div>
        </section>
    )
}
