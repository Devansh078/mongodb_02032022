const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const { MongoClient, ObjectID } = require('mongodb')
const id = new ObjectID()
console.log(id) // Print new id to the console
const databaseName = 'task-manager'
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=> {
if (error) {
return console.log('Unable to connect to database!')
}
const db = client.db(databaseName)
db.collection('news').insertOne({
country:"America",
rank:2,
population:390000})
// Start to interact with the database
db.collection('tasks').insertMany([
{
country:"india",
rank:3,
population:1300000},
{
country:"china",
rank:4,
population:1250000},
{
country:"pakistan",
rank:5,
population:400000}])
db.collection('tasks').findOne({ _id: new
ObjectID("621f1dd096d5f7101a8d4ea1") }, (error, task) => {
console.log(task)
})
});
