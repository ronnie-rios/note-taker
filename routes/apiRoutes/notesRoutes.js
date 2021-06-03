const router = require('express').Router();
const {notes} = require('../../Develop/db/db.json')

//get access to json 
router.get('/notes', (req, res) => {
    res.json(notes);
});

module.exports = router;