const express = require('express');
const app = express();

const { data } = require('./develop/db/db')

app.get('/api/data', (req, res) => {
    res.send('hello')
});

app.listen(3001, () => {
    console.log(`API server on PORT 3001`)
})