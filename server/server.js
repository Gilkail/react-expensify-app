// Get path module
const path = require('path')
// Get express server module
const express = require('express')
// Create express server instance
const app = express()
// Create path to the folder to run (../public)
const publicPath = path.join(__dirname, '..', 'public')
// Get port from heroku or use port 3000
const port = process.env.PORT || 3000

// Use express server with the static path to the root folder
app.use(express.static(publicPath))

// Check for all the file and send them back to index.html (For page with /filepath)
app.get('*', (req, res)=>{
    res.sendFile(path.join(publicPath, 'index.html'))
})

// Generate server on port and run message in the console
app.listen(port, ()=> {
    console.log('Server is running')
})