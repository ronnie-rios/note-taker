const path = require('path');
const router = require('express').Router();

//to index html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../develop/public/index.html'));
});

//to notes html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../develop/public/notes.html'))
})

//wildcard
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../develop/public/index.html'));
});

module.exports = router;