const express = require('express')
const app = express();
const PORT = process.env.PORT || 3333
const path = require('path');
const notes_router = require('./routes/notes_routes');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api',notes_router)
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})