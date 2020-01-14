import React from 'react'
import styles from '../styles/search-bar.module.css'

const search = `${styles['search']}`;
const team = `${styles['team']}`;

export default function SearchBar() {
    return (
        <div className={search}>
            <i className="material-icons">search</i>
            <input type="text" name="search" placeholder="Search" />
        </div>
    )
}

export function TeamSearchBar() {
    return (
        <div className={team}>
            <i className="material-icons">search</i>
            <input type="text" name="search" placeholder="Search for specific team members" />
        </div>
    )
}