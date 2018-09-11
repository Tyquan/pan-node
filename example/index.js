var Pan = require("../index");

//console.log(Pan);

var pa = new Pan();

var arra = [1, 2, 3];
var arra2 = [4, 5, 6];
var arra3 = [];

pa.add(arra, arra2, (result) => {
	console.log(result);
});