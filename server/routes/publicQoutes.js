const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Qoute = require('../models/Qoute');

router.get('/', async(req, res) => {
    try {
        const qoutes = await Qoute.find({ public: true }).select('-__v');
        res.status(200).json(qoutes);
    } catch (e) {
        res.status(404).json(e);
    }
});

router.get('/:qouteId', async(req, res) => {
    const id = req.params.qouteId;

    if (!ObjectID.isValid(id)) {
        return res.status(404).json({
            message: 'Provided id is not valid'
        });
    }
    try {
        const qoute = await Qoute.find({ _id: id, public: true }).select('-__v');
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

module.exports = router;