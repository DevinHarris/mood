import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import api from "../api";
import styled from "styled-components";
import { Heart, HeartBreak } from 'phosphor-react';
import store from '../store';
import { getMood } from './moodSlice';
import { BlurBackdrop } from './Layout';

const state = store.getState();
const { background } = state.mood.mood;

const MoodStyled = styled.div`
    background: url('${background}') center center no-repeat;
    background-size: cover;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    width: 100%;

    .feedback__container {
        display: inline-block;
        margin: 3em 2em;
    }

    .share__link {
        align-self: flex-end;
        color: #fff;
        font-size: 1.5rem;
         /* margin-right: 2em; */
        margin-top: 5em;
        font-weight: 300;

        a {
            color: #fff;
        }
    }
`

const MoodTitle = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
    letter-spacing: .2rem;
    /* text-transform: uppercase; */
`

const MoodAuthor = styled.h2`

    color: #a9a9a9;
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: .4rem;
`

const MoodFeedback = styled.span`
    font-size: 1.5rem;
`

const Share = styled.span`
    cursor: pointer;
`

const Mood = () => {
    
    const { mood } = useSelector(state => state.mood);
    const { id } = useParams();
    const dispatch = useDispatch();

    const [shareLink, setShareLink] = useState('');

    useEffect(() => {
        dispatch(getMood(id))
        document.title = `A Mood shared by ${ mood.submittedBy }`;
    }, [id])


    const handleOnClick = (type) => {

        switch(type) {
            case 'mood/incrementLikes':
                dispatch({ type: 'mood/incrementLikes' })
                api.put(`/mood/${id}`, mood).then(response => {
                    console.log(response);
                }).catch(err => console.log(err))
                break;
            
            case 'mood/incrementDislikes': 
                dispatch({ type: 'mood/incrementDislikes' })
                api.put(`/mood/${id}`, mood).then(response => {
                    console.log(response);
                }).catch(err => console.log(err))
                break;
            
            default: 
                console.log('no cases found')
        }
    }

    const handleUrlCopy = () => {
       setShareLink(window.location.href);
        navigator.clipboard.writeText(shareLink);
        
    }

    return (
        <MoodStyled>
            <BlurBackdrop>
                <MoodTitle>{mood.mood}</MoodTitle>
                <MoodAuthor>{mood.submittedBy}</MoodAuthor>
                <div className="social">
                    <span className="feedback__container"><Heart onClick={() => handleOnClick('mood/incrementLikes')} cursor="pointer" size={32} /> <MoodFeedback>{mood.likes}</MoodFeedback></span>
                    <span className="feedback__container"><HeartBreak onClick={() =>  handleOnClick('mood/incrementDislikes')} cursor="pointer" size={32} /> <MoodFeedback>{mood.dislikes}</MoodFeedback></span>
                    <div className="share__link">
                        <Share onClick={handleUrlCopy}>
                            {
                                !shareLink ? 'Click to share this Mood' : 'Mood copied.'
                            }
                        </Share>
                    </div>
                </div>
            </BlurBackdrop>
        </MoodStyled>
    )
}

export default Mood;