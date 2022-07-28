const notes_router = require('express').Router()
const fs = require('fs')
const path = require('path')

notes_router.get('/notes', (req, res) =>{
    fs.readFile(path.join(__dirname, '../db/db.json' ), 'utf-8', (err, data) =>{
        if(err) return console.log(err);

        res.json(JSON.parse(data))
    })
    
    res.send('y')
})

notes_router.post('/notes', (req, res) =>{

    let recievedNote = {
        title: '',
        text: ''
    }
    fs.readFile(path.join(__dirname, '../db/db.json' ), 'utf-8', (err, data) =>{
        if(err) return console.log(err);

        res.json(JSON.parse(data))
    })
    
    res.send('x')
})




module.exports = notes_router;