import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import Store from '../utils/store'
import styles from '../styles/form.module.css'
import caption from '../images/caption.png'

const checkEmail = e => {
    const email = document.querySelector('input[type="email"]');
    if (email.validationMessage === '') {
        email.classList.add('border', 'border-green');
    }
    else {
        email.classList.remove('border-green');
        email.classList.add('border-red');
    }
}

const confirmPassword = e => {
    const password = document.querySelector('input[name="password"]');
    const confirm = document.querySelector('input[name="confirm"]');

    if (password.value !== confirm.value) {
        [password, confirm].forEach(e => {
            e.setCustomValidity(`Passwords don't match`);
            e.classList.remove('border-green');
            e.classList.add('border', 'border-red');
        });
    }

    else {
        [password, confirm].forEach(e => {
            e.setCustomValidity('');
            e.classList.remove('border-red');
            e.classList.add('border-green');
        });
    }
}

export default function Signup() {
    const [error, setError] = useState(null);
    const className = `${styles['section']} container mx-auto`;

    const submitForm = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        const userExists = Store.checkUser(email);
        
        if (userExists) {
            setError('This email has been connected.');
        }
        
        else {
            new Store(email, password);
            navigate('/dashboard/');
        }
    }

    return (
        <section className={className}>
            <div>
                <img src={caption} alt="caption" />
            </div>

            <div>
                <h1>Let's get you <br /> started.</h1>

                <form method="post" onSubmit={submitForm} autoComplete="off">
                    <p>{error}</p>
                    <input type="email" required name="email" onChange={checkEmail} placeholder="Email Address" />
                    <input type="password" required name="password" onChange={confirmPassword} placeholder="Create a Password" />
                    <input type="password" required name="confirm" onChange={confirmPassword} placeholder="Confirm Password" />
                    <input className={styles['create']} type="submit" value="Create Account"/>
                    <footer>Already have an account?&nbsp;<Link to="/login">Log in</Link></footer>
                </form>
            </div>
        </section>
    )
}
