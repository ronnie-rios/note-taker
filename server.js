//dependencies
const express = require('express');
const path = require('path')
const app = express();

const PORT = process.env.PORT || 3000;
//require routes
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/notesRoutes')


//parse incoming string or array dataS
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());
//serve static 
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//server running
app.listen(PORT, () => {
    console.log(`API server on ${PORT}`)
})

