const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const Graph = require('node-dijkstra');

  const route = new Graph();
  route.addNode('A', { B: 1 });
  route.addNode('B', { A: 1, C: 2, D: 4 });
  route.addNode('C', { B: 2, D: 1 });
  route.addNode('D', { C: 1, B: 4 });

  res.status(200);
  res.send(route.path('A', 'D'));
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
