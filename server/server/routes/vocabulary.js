const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var pick = require('lodash.pick');
const { ObjectID } = require('mongodb');

const Vocabulary = require('../models/Vocabulary');
const authentication = require('../middleware/authentication');

router.get('/', authentication, async(req, res) => {
    try {
        const words = await Vocabulary.find({ _creatorId: req.userData.userId });
        return res.status(200).json(words);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.post('/', authentication, async(req, res) => {
    try {
        const word = new Vocabulary({
            word: req.body.word,
            translatedWord: req.body.translatedWord,
            examples: req.body.examples,
            _creatorId: req.userData.userId
        });
        res.status(201).json(await word.save());
    } catch (e) {
        res.status(404).json(e);
    }
});

router.patch('/:wordId', authentication, async(req, res) => {
    const id = req.params.wordId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the word id is invalid'
        });
    }
    
    try {
        const update = pick(req.body, ['word', 'translatedWord', 'examples']);
        update.date = new Date();

        const updated = await Vocabulary.findOneAndUpdate({
            _id: id,
            _creatorId: req.userData.userId
        }, {
            $set: update
        }, {
            new: true
        })
        if (!updated) {
            return res.status(404).json({message: 'cannot find word by provided id'});
        }
        res.status(200).json(updated);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.delete('/:wordId', authentication, async(req, res) => {
    const id = req.params.wordId;

    if (!ObjectID.isValid(id)) {
        return res.status(504).json({
            message: 'the word id is invalid'
        });
    }

    try {
        const deleted = await Vocabulary.findOneAndRemove({ _id: id, _creatorId: req.userData.userId });
        if (!deleted) {
            return res.status(404).json({
                message: 'there are no such a word'
            });
        }
        res.status(200).json(deleted);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;