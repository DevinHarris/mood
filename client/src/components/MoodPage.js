import React from 'react';
import { useSelector } from 'react-redux';
import Mood from "./Mood";

const MoodPage = () => {

    const { mood } = useSelector(state => state);

    console.log(mood);

    return (
        <div className="mood">
            <Mood />
        </div>
    )
}

export default MoodPage;