const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var pick = require('lodash.pick');
const { ObjectID } = require('mongodb');

const Diary = require('../models/DiaryNote');
const authentication = require('../middleware/authentication');

router.get('/', authentication, async(req, res) => {
    try {
        const diaryNotes = await Diary.find({ _creatorId: req.userData.userId }).select('-__v');
        res.status(200).json(diaryNotes);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.post('/', authentication, async(req, res) => {
    try {
        const diaryNote = new Diary({
            title: req.body.title,
            body: req.body.body,
            _creatorId: req.userData.userId,
            public: req.body.public
        });
        res.status(201).json(await diaryNote.save());
    } catch (e) {
        res.status(404).json(e);
    }
});

router.get('/:diaryId', authentication, async(req, res) => {
    const id = req.params.diaryId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the diary id is invalid'
        });
    }

    try {
        const diaryNote = await Diary.find({ _id: id, _creatorId: req.userData.userId }).select('-__v');
        if (!diaryNote) {
            return res.status(404).json({message: 'no valid diary id'});
        } 
        res.status(200).json(diaryNote);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.patch('/:diaryId', authentication, async(req, res) => {
    const id = req.params.diaryId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the diary id is invalid'
        });
    }
    
    try {
        const update = pick(req.body, ['title', 'body', 'public']);
        update.date = new Date();

        const updated = await Diary.findOneAndUpdate({
            _id: id,
            _creatorId: req.userData.userId
        }, {
            $set: update
        }, {
            new: true
        })
        if (!updated) {
            return res.status(404).json({message: 'Cannot find diary by provided id'});
        }
        res.status(200).json(updated);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:diaryId', authentication, async(req, res) => {
    const id = req.params.diaryId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the diary id is invalid'
        });
    }

    try {
        const deleted = await Diary.findOneAndRemove({ _id: id, _creatorId: req.userData.userId });
        if (!deleted) {
            return res.status(404).json({
                message: 'there are no such a diary note'
            });
        }
        res.status(200).json(deleted);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;