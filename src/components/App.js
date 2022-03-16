import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutElement from "./Layout";
import GlobalStyles from './global.css';
import Home from './Home'; 
import MoodPage from "./MoodPage";
import Add from "./Add";

const App = () => {

    return (
        <BrowserRouter>
            <GlobalStyles />
            <LayoutElement>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/mood/:id" element={<MoodPage />} />
                    <Route path="/add" element={<Add />} />
                </Routes>
            </LayoutElement>
        </BrowserRouter>
    )
}

export default App;