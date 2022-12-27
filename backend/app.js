//connect to db
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://InnoUser:InnoPassword@innocluster.ilvrezq.mongodb.net/ProductDb?retryWrites=true&w=majority')
.then(() => {
  console.log("connected to db");
})
.catch(() => {
  console.log("error connecting to db");
});

//get schema
const Product = require('./model/entry');

//express
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

//Graph
const route = require('./graph/graph');

//routes
app.get('/', (req, res) => {
  Product.find({product: req.body.product})
  .then(documents => {
    console.log("Found: " + documents);
    if(documents.length == 0) {
      res.status(401).json({message: "Product does not exist"});
    }
    else {
      node = documents[0].node;
      finalPath = route.path('A', node);
      res.status(200).json({message: finalPath});
    }
  })
});

app.post('/', (req, res) => {
  const entry = new Product({
    product: req.body.product,
    node: req.body.node
  });
  entry.save();
  res.send("inserted product " + req.body.product + ", node: " + req.body.node);
})

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

