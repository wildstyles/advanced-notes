const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Diary = require('../models/DiaryNote');

router.get('/', async(req, res) => {
    try {
        const diaryNotes = await Diary.find({ public: true }).select('-__v');
        res.status(200).json(diaryNotes);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.get('/:diaryId', async(req, res) => {
    const id = req.params.diaryId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the diary id is invalid'
        });
    }

    try {
        const diaryNote = await Diary.find({ _id: id, public: true }).select('-__v');
        if (!diaryNote) {
            return res.status(404).json({message: 'no valid diary id'});
        } 
        res.status(200).json(diaryNote);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;