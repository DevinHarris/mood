import React from "react";
import styled from 'styled-components';
import Nav from './Nav';

const Layout = styled.div`
    height: 100vh;
    width: 100vw;
`

const Main = styled.div`
    align-items: center;
    background: url('https://images.pexels.com/photos/4448848/pexels-photo-4448848.jpeg') center center no-repeat;
    background-size: cover;
    display: flex;
    min-height: 100%;
    min-width: 100%;
    justify-content: center;
`

export const BlurBackdrop = styled.div`
    backdrop-filter: blur(30px) contrast(.8);
    height: 100vh;
    width: 100vw;
`

const LayoutElement = ({ children }) => {
    return (
        <Layout>
            <Nav />
            <Main>
                <BlurBackdrop>
                    { children }
                </BlurBackdrop>
            </Main>
        </Layout>
    )
}

export default LayoutElement;