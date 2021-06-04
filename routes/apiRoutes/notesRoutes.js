const router = require('express').Router();
const {notes} = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

//creates new notes
function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return newNote;
};

//get access to json 
router.get('/savednotes', (req, res) => {
    res.json(notes);
});
//post new notes
router.post('/savednotes', (req, res) => {
    console.log(req.body);
    //use function to take in data to send
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

module.exports = router;