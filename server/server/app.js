const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// connect to database
const { mongoose } = require('./db/mongoose');

// routes files
const qouteRoutes = require('./routes/qoutes');
const notesRoutes = require('./routes/notes');
const diaryRoutes = require('./routes/diary');
const vocabularyRoutes = require('./routes/vocabulary');
const userRoutes = require('./routes/user');

const publicDiariesRoutes = require('./routes/publicDiaries');
const publicQoutesRoutes = require('./routes/publicQoutes');

const app = express();
const port = process.env.PORT;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.use('/qoutes', qouteRoutes);
app.use('/notes', notesRoutes);
app.use('/diary', diaryRoutes);
app.use('/vocabulary', vocabularyRoutes);
app.use('/user', userRoutes);

app.use('/publicDiaries', publicDiariesRoutes);
app.use('/publicQoutes', publicQoutesRoutes);



module.exports = app;