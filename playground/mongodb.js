
const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error){
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 59
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6209a6c0709a446ece5221de")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').findOne({_id: new ObjectID('6209abbbcd72e270c8915c93')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age: 24}).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bruce',
    //         age: 60
    //     },
    //     {
    //         name: 'Clark',
    //         age: 59
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to add users')
    //     }
    //     console.log(result.ops)
    // })

})