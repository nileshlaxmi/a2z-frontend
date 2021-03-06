import React from 'react';
import './Lost.css';
import { Link } from 'react-router-dom';

const Lost = () => {
    return (
        <div className="lost">
            <div className="lost-message">
                <h2>Your page wasn't found</h2>
                <p>Find your way <Link to="/home">home</Link></p>
            </div>
        </div>
    );
}

export default Lost;