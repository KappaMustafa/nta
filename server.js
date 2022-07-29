const express = require('express')
const app = express();
const PORT = process.env.PORT || 3333
const path = require('path');
const routes = require('./routes/notes_routes')
     


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', routes.html_router);
app.use('/api', routes.notes_router)

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`);
})
