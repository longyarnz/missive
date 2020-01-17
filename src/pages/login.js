import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import Store from '../utils/store'
import login from '../images/login.png'
import styles from '../styles/form.module.css'

export default function Login() {
    const [error, setError] = useState(null);
    const className = `${styles['section']} container mx-auto`;
    const attrs = { autoComplete: 'off', required: true }

    const logUserIn = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        const userExists = Store.logUser(email, password);

        if (!userExists) {
            setError('Your email or password is incorrect.');
        }

        else {
            navigate('/dashboard/', { replace: true });
        }
    }

    return (
        <section className={className}>
            <div>
                <img src={login} alt="caption" />
            </div>

            <div>
                <h1>Log in to your <br /> account.</h1>
                <form method="post" onSubmit={logUserIn} autoComplete="off">
                    <p>{error}</p>
                    <input type="email" name="email" placeholder="Email Address" {...attrs} />
                    <input type="password" name="password" placeholder="Create a Password" {...attrs} />
                    <Link to="/forgot">Forgot password</Link>
                    <div>
                        <input type="submit" value="Login" />
                        <span>
                            New here? <Link to="/signup">Sign Up</Link>
                        </span>
                    </div>
                </form>
            </div>
        </section>
    )
}
