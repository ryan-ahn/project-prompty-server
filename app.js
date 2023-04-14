/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

// Express
const express = require('express');
const app = express();

// Env
const dotenv = require('dotenv');
dotenv.config();

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/prompt', require('./routes/promptRouter'));

// MongoDB
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL);
client.connect();

// DB
const db = client.db('prompt');
const promptList = db.collection('list');

app.use('/', require('./routes/promptRouter'));

app.listen(5000, function () {
  response.send('완료');
});

app.get('/', function () {
  response.send('완료');
});

app.get('/get/:id', async (request, response) => {
  await promptList
    .findOne({}, { _id: request.params.id })
    .then((res) => console.log(res));
  response.send('완료');
});

app.post('/post', async (request, response) => {
  await promptList.insertOne({
    prompt: request.body.prompt,
    answer: request.body.answer,
  });
  response.send('전송완료');
});

app.put('/put/:id', async (request, response) => {
  await promptList
    .updateOne(
      { _id: request.params.id },
      { $set: { prompt: '이거 바뀐거 맞음?' } }
    )
    .then((res) => console.log(res));
  response.send('완료');
});
