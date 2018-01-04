const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var pick = require('lodash.pick');
const { ObjectID } = require('mongodb');

const Qoute = require('../models/Qoute');
const authentication = require('../middleware/authentication');

router.post('/', authentication, async(req, res) => {
    try {
        const qoute = new Qoute({
            qoute: req.body.qoute,
            author: req.body.author,
            _creatorId: req.userData.userId,
            public: req.body.public
        });
        res.status(201).json(await qoute.save().select('-__v'));
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/', authentication, async(req, res) => {
    try {
        const qoutes = await Qoute.find({ _creatorId: req.userData.userId }).select('-__v');
        res.status(200).json(qoutes);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.get('/:qouteId', authentication, async(req, res) => {
    const id = req.params.qouteId;

    if (!ObjectID.isValid(id)) {
        return res.status(404).json({
            message: 'Provided id is not valid'
        });
    }
    try {
        const qoute = await Qoute.find({ _id: id, _creatorId: req.userData.userId }).select('-__v');
        if (!qoute) {
            return res.status(404).json({
                message: 'qoute wasnt found'
            });
        }
        res.status(200).json(qoute);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.patch('/:qouteId', authentication, async(req, res) => {
    const id = req.params.qouteId;
    const body = pick(req.body, ['qoute', 'author', 'public']);
    body.date = new Date();

    if (!ObjectID.isValid(id)) {
        return res.status(404).json({message: 'Provided id is not valid'});
    }
    
    try {
        const updated = await Qoute.findOneAndUpdate({
            _id: id,
            _creatorId: res.userData.userId
        }, {
            $set: body
        }, {
            new: true
        });
        if (!updated) {
            return res.status(404).json({message: 'cannot find qoute by provided id'});
        } 
        res.status(200).json(updated);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.delete('/:qouteId', authentication, async(req, res) => {
    const id = req.params.qouteId;

    if (!ObjectID.isValid(id)) {
        return res.status(404).json({message: 'Provided id is not valid'});
    }

    try {
        const removed = await Qoute.findOneAndRemove({
            _id: id,
            _creatorId: res.userData.userId
        });
        if (!removed) {
            return res.status(404).send({
                error: 'There is not such a qoute'
            });
        }
        res.status(200).json(removed);
    } catch (e) {
        res.status(500).json(e);
    }
});


module.exports = router;