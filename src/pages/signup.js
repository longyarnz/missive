import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/form.module.css'
import caption from '../images/caption.png'

export default function Signup() {
    return (
        <section className="container mx-auto">
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>Let's get you <br /> started.</h1>
                <form method="post">
                    <input type="email" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Create a Password" />
                    <input type="password" name="confirm" placeholder="Confirm Password" />
                    <input className={styles['create']} type="button" value="Create Account"/>
                    <footer>Already have an account?&nbsp;<Link to="/login">Log in</Link></footer>
                </form>
            </div>
        </section>
    )
}
