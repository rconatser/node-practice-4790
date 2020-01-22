import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

export const mongoConnect = (callback) => {
MongoClient.connect('mongodb+srv://someuser:abcd1234@tinyhousecluster-opg2q.mongodb.net/test?retryWrites=true&w=majority').then(client => {
    console.log('Connected')
    callback(client)
}).catch(err => {
    console.log(err)
})
}