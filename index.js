
import express from 'express'
import bodyParser from 'body-parser'
import { router } from './routes/test.route'

import { mongoConnect } from './database/database'

const app = express()

app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: false,
}))

app.use(express.static('public'))

app.use('/', router)

app.use('/api', function(req, res, next) {
    console.log(req)
    console.log(`A new request was received at ${new Date().toLocaleString()}`)
    res.send(`Thanks for hitting my api`)
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

/* mongoConnect(client => {
    console.log(client)
    app.listen(port, () => {
        console.log(`Server is up and running on port ${port}`)
    })
}) */