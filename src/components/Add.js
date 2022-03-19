import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import api from '../api';

const AddPage = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 10em;
    width: 100%;

    form {
        width: 100%;
    }
`

const FormInput = styled.input`
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 2em;
    padding: 1em;
    text-align: center;
    width: 100%;

    &:active, &:focus {
        outline: none;
    }
`

const MoodSubmit = styled.button`
    background: none;
    border: 1px solid #fff;
    border-radius: 1em;
    color: #fff;
    cursor: pointer;
    padding: 2em 4em;

`

const Add = () => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        const { mood, name, background  } = data;

        const dataToSend = {
            mood,
            submittedBy: name,
            likes: 0,
            dislike: 0,
            background
        }

        api.post('/api/add', dataToSend).then((response) => {
            const { data } = response;

            navigate(`/mood/${data.id}`);
        });
        dispatch({ type: 'mood/addMood', payload: dataToSend });
    
        reset();
    };

    return (
        <AddPage>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormInput {...register('mood')} placeholder="Mood" />
                </div>
                <div>
                    <FormInput {...register('name')} placeholder="Name" />
                </div>
                <div>
                    <FormInput {...register('background')} placeholder="Paste an image URL that describes this mood." />
                </div>
                <MoodSubmit type="submit">Add</MoodSubmit>
            </form>
        </AddPage>
    )
}

export default Add;