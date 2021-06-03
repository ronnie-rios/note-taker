//dependencies
const express = require('express');
const path = require('path')
const app = express();
//access to db.json
const { data } = require('./develop/db/db.json')

// app.get('/api/data', (req, res) => {
//     res.json(data);
// });

//to index html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

//to notes html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'))
})

//server running
app.listen(3001, () => {
    console.log(`API server on PORT 3001`)
})