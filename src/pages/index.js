import React from "react"
import { Link } from "gatsby"

export default function IndexPage() {
    return (
        <section className="container mx-auto flex flex-col font-sans">
            <Link className="text-gray-500 underline hover:text-highlight" to="/signup">Sign Up</Link>
            <Link className="text-gray-500 underline hover:text-highlight" to="/login">Login</Link>
            <Link className="text-gray-500 underline hover:text-highlight" to="/reset">Forgot Password</Link>
            <Link className="text-gray-500 underline hover:text-highlight" to="/dashboard">Dashboard</Link>
        </section>
    )
}
