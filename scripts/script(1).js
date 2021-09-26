const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Patches = require('Patches');

Promise.all([
Scene.root.findFirst('scr'),
Patches.outputs.getScalar('points')
]).then(function(results){

var counter=results[0];
var scoreNumber=results[1];

counter.text = scoreNumber.toString();
});