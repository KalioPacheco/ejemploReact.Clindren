import React from 'react';
import './styles/Welcome.css';
import {Link} from 'react-router-dom';
import confLogo from '../images/badge-header.svg';

function Welcome() {

    return (
        <React.Fragment>
            <div className="welcome text-center">
                <div className="texto">
                    <h1 className="letras">Welcome</h1>
                    <img src={confLogo} alt="logo" className="logo"></img><br></br>
                    <Link className="btn btn-primary" to="/badges">Go to Start!</Link> &nbsp
                    <Link className="btn btn-primary" to="/Api">Ver personajes</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Welcome;