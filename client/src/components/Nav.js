import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    min-height: 10em;
    min-width: 100vw;
    justify-content: center;
    text-align: center;
    z-index: 100000;

    a {
        color: #fff;
        text-decoration: none;
    }
`

const Logo = styled.h1`
    font-size: 2rem;
    letter-spacing: 2rem;
    text-transform: uppercase;
`

const Navigation = () => (

    <Nav>
        <Link to="/">
            <Logo>Mood</Logo>
        </Link>
    </Nav>
)

export default Navigation;