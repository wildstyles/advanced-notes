const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var pick = require('lodash.pick');
const { ObjectID } = require('mongodb');

const Note = require('../models/Note');
const authentication = require('../middleware/authentication');

router.get('/', authentication, async(req, res) => {
    try {
        const notes = await Note.find({ _creatorId: req.userData.userId }).select('-__v');
        return res.status(200).json(notes);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.post('/', authentication, async(req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            body: req.body.body,
            _creatorId: req.userData.userId
        });
        return res.status(201).json(await note.save());
    } catch (e) {
        res.status(404).json(e);
    }
});

router.get('/:noteId', authentication, async(req, res) => {
    const id = req.params.noteId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'Provided id is not valid'
        });
    }

    try {
        const note = await Note.find({ _id: id, _creatorId: req.userData.userId }).select('-__v');
        if (!note) {
            return res.status(404).json({message: 'cant find note by provided id'});
        }
        res.status(200).json(note); 
    } catch (e) {
        res.status(500).json(e);
    }
});

router.patch('/:noteId', authentication, async(req, res) => {
    const id = req.params.noteId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'Provided id is not valid'
        });
    }
    
    try {
        const update = pick(req.body, ['title', 'body']);
        update.date = new Date();

        const updated = await Note.findOneAndUpdate({
            _id: id,
            _creatorId: req.userData.userId
        }, {
            $set: update
        }, {
            new: true
        })
        if (!updated) {
            return res.status(404).json({message: 'provided id is not valid'});
        }
        res.status(200).json(updated);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:noteId', authentication, async(req, res) => {
    const id = req.params.noteId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the id is invalid'
        });
    }
    try {
        const deleted = await Note.findOneAndRemove({_id: id, _creatorId: req.userData.userId });
        if (!deleted) {
            return res.status(404).json({
                message: 'there are no such a note'
            });
        }
        res.status(200).json(deleted);
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;