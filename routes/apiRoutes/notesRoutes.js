const router = require('express').Router();
const {notes} = require('../../Develop/db/db.json')

//get access to json 
router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})
module.exports = router;