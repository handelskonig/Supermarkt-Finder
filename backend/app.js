//connect to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://InnoUser:InnoPassword@innocluster.ilvrezq.mongodb.net/ProductDb?retryWrites=true&w=majority')
.then(() => {
  console.log("connected to db")
})
.catch(() => {
  console.log("error connecting to db")
});

//get schema
const Product = require('./model/entry')

//express
const express = require('express');
const app = express();
const PORT = 3000;

//Graph
const Graph = require('node-dijkstra');

  const route = new Graph();
  route.addNode('A', { B: 1 });
  route.addNode('B', { A: 1, C: 2, D: 4 });
  route.addNode('C', { B: 2, D: 1 });
  route.addNode('D', { C: 1, B: 4 });

app.get('/', (req, res) => {
  Product.find({product: "Test"})
  .then(documents => {
    console.log("Found: " + documents)
  })
  res.send("hello express")
});

app.post('/', (req, res) => {
  const entry = new Product({
    product: "Post",
    node: "Z"
  })
  entry.save()
  res.send("inserted")
})

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
