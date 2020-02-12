
import express from 'express'
import bodyParser from 'body-parser'
import { testRouter } from './routes/test.route'
import { adminRouter } from './routes/admin.route'

import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.urlencoded({
    limit: '5mb',
    extended: false,
}))

app.use(express.static('public'))

app.use('/', testRouter)
app.use('/admin', adminRouter)

app.use('/api', function(req, res, next) {
    //console.log(req)
    console.log(`A new request was received at ${new Date().toLocaleString()}`)
    res.send(`Thanks for hitting my api`)
})

let port = process.env.port
if (port == null || port == "") {
  port = 8000
}

mongoose.connect(
  `mongodb+srv://someuser:abcd1234@tinyhousecluster-opg2q.mongodb.net/test?retryWrites=true&w=majority`
)
.then(result => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
})
.catch(err => console.log(err))