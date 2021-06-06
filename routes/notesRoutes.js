const router = require('express').Router();
const {notes} = require('../db/db.json');
const fs = require('fs');
const path = require('path');

//creates new notes
function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray}, null, 2)
    );
    return newNote;
};

//function to create id for note
function notesId (id, notesArray) {
    for(let i = 0; i< notesArray.length; i++) {
        if (notesArray[i].id === id) {
            return i;
        }
    }
};

//delete note
function deleteNote(id, notesArray) {
    let notesIndex = notesId(id, notesArray);
    
    notesArray.splice(notesIndex, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes}, null, 2)
    );
    return id;
}

//get access to json 
router.get('/notes', (req, res) => {
    res.json(notes);
});
//post new notes
router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = notes.length.toString();
    //use function to take in data to send
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

//delete a note route
router.delete('/notes/:id', (req, res) => {
    let notesId = req.params.id;
    res.json(deleteNote(notesId, notes))
})

module.exports = router;