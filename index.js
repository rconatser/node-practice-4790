const express = require('express')

const app = express()

app.use('/api', function(req, res, next) {
    console.log(req)
    console.log(`A new request was received at ${new Date().toLocaleString()}`)
    res.send(`Thanks for hitting my api`)
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})