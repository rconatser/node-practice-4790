const express = require('express')

const app = express()

app.use('/', function(req, res, next) {
    console.log(`A new request was received at ${new Date().toLocaleString()}`)
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})