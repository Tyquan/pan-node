var Pan = require("../index");

var pa = new Pan();

var myArray = [1,2,3,4,5,6,7];
// mean average of the myArray population
console.log(pa.mean(myArray));

var myArray2 = [10,9,8,7,6,5,4,3,2,1];
// median average of the myArray population
pa.median(myArray2);

var myArray3 = [10,9,8,7,6,5,5,5,4,4,3,2,1];
pa.mode(myArray3);

var myArray4 = [0,0,5,5];
pa.popVariance(myArray4);

var myArray5 = [1,2,3,8,7];
pa.sampleVariance(myArray5);

var myArray6 = [1,2,3,8,7];
var population = pa.popVariance(myArray6);
var sample = pa.sampleVariance(myArray6);
pa.sDeviation(population);
pa.sDeviation(sample);

var myArray7 = [1,2,3,8,7];
console.log(pa.add(myArray7));