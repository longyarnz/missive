import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/form.module.css'
import caption from '../images/caption.png'

export default function Login() {
    return (
        <section className={styles.section}>
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>Log in to your <br /> account.</h1>
                <form method="post">
                    <input type="email" name="email" placeholder="Email Address" />
                    <input type="password" name="password" placeholder="Create a Password" />
                    <Link to="/reset">Forgot password</Link>
                    <div>
                        <input type="button" value="Login" />
                        <span>
                            New here? <Link to="/signup">Sign Up</Link>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    )
}
