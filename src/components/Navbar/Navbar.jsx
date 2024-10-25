import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { auth } from "./../../firebase";

function Navbar() {

    async function handleLogout() {
        try {
            await auth.signOut();
            window.location.href = "/login";
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    }


    return (
        <div className="navbar">

            <Link className='Link' to="/bmi">BMI Calculator</Link>
            <div className='LinkTag'>

                <Link className='Links' to="/bmi">BMI</Link>
                <Link className='Links' to="/profile">Profile</Link>
                <Link className='Links' to="/guide">Guide</Link>
                <Link onClick={handleLogout} className='Loglink' to="/login">Logout</Link>
            </div>
        </div>
    )
}
export default Navbar;
