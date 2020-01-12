import React from 'react'
import { Link } from 'gatsby'
import login from '../images/login.png'
import styles from '../styles/form.module.css'

export default function Login() {
    const className = `${styles['section']} container mx-auto`;
    return (
        <section className={className}>
            <div>
                <img src={login} alt="caption" />
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
