const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

router.get('/moods', (req, res) => {

    res.status(200).send({
        message: 'get all moods'
    })
})

router.post('/api/add', (req, res) => {

    try {
        const mood = Mood.create(req.body);

        mood.then((mood) => {
            console.log('Successfully saved.');
            res.status(201).json(mood);
        }).catch(err => {
            res.status(400).send("Sorry could not add Mood.");
            console.log(err);
        })

    } catch(err) {
        res.status(500).send(err);
    }
})

router.get('/mood/:id', (req, res) => {

    const { params } = req;

    try {
        Mood.findOne({ id: params.id }).then(mood => {
            res.status(201).json(mood);
        })
    } catch (err) {
        res.status(400).send('There was an error');
        console.log(err);
    }
})


module.exports = router;