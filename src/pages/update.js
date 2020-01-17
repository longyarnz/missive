import React, { useState } from 'react'
import styles from '../styles/form.module.css'
import caption from '../images/forgot.png'

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

export default function UpdatePassword() {
    const [success, setSuccess] = useState(null);
    const className = `${styles['section']} container mx-auto`;

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
                <h1>Welcome back! <br /> Set up your new password.</h1>
                <form method="post" onSubmit={resetPassword}>
                    <p id={styles['success']}>{success}</p>
                    <input type="password" required name="password" onChange={confirmPassword} placeholder="New password" />
                    <input type="password" required name="confirm" onChange={confirmPassword} placeholder="Retype new password" />
                    <input className={styles['reset']} type="submit" value="Update Password" />
                </form>
            </div>
        </section>
    )
}
