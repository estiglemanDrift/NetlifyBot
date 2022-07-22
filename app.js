// Imports
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')


//this is the root file so 1st argument can be left blank ''
app.get('', (req, res) => {
    res.render('index')
})

//additional pages require a path ''
app.get('/about', (req, res) => {
    res.render('about')
})





// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))
