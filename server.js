//dependencies
const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3001
//require routes
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes/notesRoutes')


//parse incoming string or array dataS
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());
//serve static 
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//server running
app.listen(3001, () => {
    console.log(`API server on ${PORT}`)
})

