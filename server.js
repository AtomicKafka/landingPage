/**
 * This is a typical Node.js server setup, which is used to serve up a demo React app that
 * will be using atomic-kafka to produce data to a Kafka cluster.
 */

const express = require('express');
const app = express();
const path = require("path");


//This port will be used for express and the socket io connection
const port = 3000;


app.use(express.urlencoded({ extended:true }));
app.use(express.json());

//Serving up the styles sheet
app.use('/assets', express.static(path.join(__dirname, './assets')));

app.get('/', (req, res) => {
  console.log('*** serving root of landing page ( / )');
  res.sendFile(path.resolve(__dirname + '/index.html'))
})

if(process.env.NODE_ENV === 'production'){
  app.use('/build', express.static(path.join(__dirname, '/build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '/index.html'));
  });
}

//Global 404 handler
app.use('*', (req, res) => {
  return res.status(404).send('********** GLOBAL BAD REQUEST / 404 ERROR **********');
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});