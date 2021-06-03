//dependencies
const express = require('express');
const path = require('path')
const app = express();
//access to db.json
const { notes } = require('./develop/db/db.json')

//require routes
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes')

const PORT = process.env.PORT || 3001


app.get('/api/notes', (req, res) => {
    res.json(notes);
});

//parse incoming string or array dataS
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());

app.use('/', htmlRoutes);

//server running
app.listen(3001, () => {
    console.log(`API server on ${PORT}`)
})