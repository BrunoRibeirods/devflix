import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo}></img>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink" alt="DevFlix Logo">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;