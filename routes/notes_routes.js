const notes_router = require('express').Router()
const html_router = require('express').Router();
const fs = require('fs')
const path = require('path')
const uuid = require ('uuid').v4

// HTML ROUTERS 
html_router.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname,'../public/index.html'),'utf-8', (err, data) =>{
        if(err) return console.log(err);

    })
});
html_router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'), 'utf-8', (err, data) =>{
        if(err) return console.log(err);
    })
});



//API ROUTERS
notes_router.get('/notes', (req, res) => {

    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);

        let dbData = JSON.parse(data);

        res.send(dbData);
    })
});
notes_router.post('/notes', (req, res) => {
    const userNote = {
        title: req.body.title,
        text: req.body.text
    };
    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);
        const notesDb = JSON.parse(data);
        notesDb.push(userNote);
        notesDb.forEach((note, index) => {
            const id = uuid().slice(0, 4);
            note.id = id;
            return notesDb;
        });
        const turnNotesToStrings = JSON.stringify(notesDb);
        fs.writeFile('./db/db.json', turnNotesToStrings, (err, data) => {
            if (err) console.log(err);
        });
    });
});


module.exports = {notes_router: notes_router, html_router: html_router};