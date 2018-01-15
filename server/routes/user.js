const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ObjectID } = require('mongodb');

const { User }   = require('../models/User');
const Qoute = require('../models/Qoute');
const Note = require('../models/Note');
const Diary = require('../models/DiaryNote');
const Vocabulary = require('../models/Vocabulary');

const authentication = require('../middleware/authentication');

router.post('/signup', async(req, res) => {
    try {
        const user = await User.find({ email: req.body.email });
        if (user.length >= 1) {
            return res.status(409).json({
                message: 'Mail exists'
            });
        }

        const id = new mongoose.Types.ObjectId();
        const hash = await bcrypt.hash(req.body.password, 10);

        const token = jwt.sign({
                email: req.body.email,
                userId: id
            },
            process.env.JWT_KEY, {
                expiresIn: "3h"
            });

        const newUser = new User({
            _id: id,
            email: req.body.email,
            password: hash
        })
        newUser.save();
        return res.header('authorization', `bearer ${token}`).status(201).json({
            user: newUser,
            token
        });
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/signin', async(req, res) => {
    try {
        var user = await User.find({ email: req.body.email }).select('-__v');
        if (user.length < 1) {
            return res.status(401).json({
                message: 'Auth failed(email is not exist)'
            });
        }

        const isPassword = await bcrypt.compare(req.body.password, user[0].password);
        if (isPassword) {
            const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                },
                process.env.JWT_KEY, {
                    expiresIn: "1h"
                });
            return res.header('authorization', `bearer ${token}`).status(200).json({
                message: 'Auth successful',
                user: user[0],
                token
            });
        }
        return res.status(401).json({
            message: 'Auth failed(password is not correct)'
        });
    } catch (e) {
        res.status(500).json(e);
    }
});



router.delete('/', authentication, async(req, res) => {
    const id = req.userData.userId;

    if (!ObjectID.isValid(id)) {
        return res.status(404).json({
            message: 'id of item is not valid'
        });
    }
    try {
        const deletedUser = await User.findOneAndRemove({ _id: id }).select('-__v');
        if (!deletedUser) {
            return res.status(404).json({ message: 'the user id is not found' });
        }
        await Qoute.remove({ _creatorId: id });
        await Note.remove({ _creatorId: id });
        await Diary.remove({ _creatorId: id });
        await Vocabulary.remove({ _creatorId: id });

        res.status(200).json(deletedUser);
    } catch (e) {
        res.status(500).json(e);
    } 
});

module.exports = router;