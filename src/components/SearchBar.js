import React from 'react'
import styles from '../styles/search-bar.module.css'

const className = `${styles['searchBar']}`;

export default function SearchBar() {
    return (
        <div className={className}>
            <i className="material-icons">search</i>
            <input type="text" name="search" placeholder="Search" />
        </div>
    )
}
