const Graph = require('node-dijkstra')
 
const route = new Graph()
 
route.addNode('A',{B:6}) //Start
route.addNode('B',{A:6,G:5,C:4})
route.addNode('C',{B:4,D:5}) //ToGO, Backbox
route.addNode('D',{C:5,E:6})//Feinkost, Gemüse
route.addNode('E',{D:6,J:5})//obst, Gemüse
route.addNode('F',{G:6,K:5})
route.addNode('G',{B:5,F:6,H:5,L:5})
route.addNode('H',{G:5,I:6}) //Fleisch, Frühstück
route.addNode('I',{H:6,J:4}) //Milchprodukter
route.addNode('J',{E:5,I:4,N:5}) //Water
route.addNode('K',{F:5,L:6,O:5}) //Chips
route.addNode('L',{G:5,K:6,M:5}) //Teigwaren
route.addNode('M',{L:5,S:5}) //Gewürze
route.addNode('S',{M:5,N:5}) //Konserver, Backsachen
route.addNode('N',{J:5,S:5,R:5}) 
route.addNode('O',{K:5,P:6})  //Schoki
route.addNode('P',{O:6,Q:7}) //Tiefkühlwaren
route.addNode('Q',{P:7,R:8}) //Bier, Haushaltgeräte
route.addNode('R',{N:5,Q:8}) //Softdrinks

//finalPath=route.path('A','R')
//console.log(finalPath)

module.exports = route;