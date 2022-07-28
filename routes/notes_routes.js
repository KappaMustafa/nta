const notes_router = require('express').Router()
const html_router = require('express').Router();
const html_router2 = require('express').Router();
const fs = require('fs')
const path = require('path')
const uuid = require ('uuid').v4

html_router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
});

html_router2.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});



notes_router.get('/api/notes', (req, res) =>{
    fs.readFile(path.join(__dirname, '../db/db.json' ), 'utf-8', (err, data) =>{
        if(err) return console.log(err);

        res.json(JSON.parse(data))
    })
})

notes_router.post('/api/notes', (req, res) =>{

    fs.readFile(path.join(__dirname, '../db/db.json' ), 'utf-8', (err, data) =>{
        if(err) return console.log(err);

        res.json(JSON.parse(data))
    })
    fs.writeFile('./db/db.json', (err, data) => {
        if (err) console.log(err);
    });
})




module.exports = notes_router, html_router, html_router2;