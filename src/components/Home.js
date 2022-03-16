import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeStyled = styled.div`

    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    width: 100%;

    a {
        border: 1px solid #fff;
        border-radius: 1em;
        color: #fff;
        cursor: pointer;
        font-size: 1.8rem;
        padding: 1em;
        letter-spacing: .1rem;
        text-decoration: none;
    }
`

const HomeHeading = styled.h1 `

    font-size: 4rem;
    letter-spacing: .1rem;
    font-weight: 700;
    margin-bottom: 1em;
`

const Home = () => {

    const { mood } = useSelector(state => state);
    
    return (
        <div>
            <HomeStyled>
                <HomeHeading>Tell the world what's on your mind.</HomeHeading>
                <Link to="/add">Post a Mood</Link>
            </HomeStyled>
        </div>
    )
}

export default Home;