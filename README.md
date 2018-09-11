pan-node
=========

> A Statistics and Probability library for Data Analysis

## Installation

  npm install pan-node --save
  
## Tests

  npm run test
  
## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
* 0.2.0 Bug Fixes And Test update

## Methods Usage

### Pan.mean (method)

> A method that sums all elements of an array and divids the sum by the arrays length

    let pa = new Pan();
    let myArray = [1,2,3,4,5,6,7];
    // mean average of the myArray population
    pa.mean(myArray, (result) => {
        console.log(result);
    });
    
### Pan.median (method)

> Finds the middle integer in an array (Only for odd integers). If an arrays length i even then the method will just return the length of tha array

    let pa = new Pan();
    let myArray2 = [10,9,8,7,6,5,4,3,2,1];
    pa.median(myArray2, (result) => {
        console.log(result);
    });
    
### Pan.mode (method)

> Finds the most common integer in an array

    let pa = new Pan();
    let myArray3 = [10,9,8,7,6,5,5,5,4,4,3,2,1];
    pa.mode(myArray3, (result) => {
        console.log(result);
    });
    
### Pan.popVariance (method)

> variance of a population array

    let pa = new Pan();
    let myArray4 = [0,0,5,5];
    pa.popVariance(myArray4, (result) => {
        console.log(result);
    });
    
### .sampleVariance (method)

> Get the variance of a sample array

    let pa = new Pan();
    let myArray5 = [1,2,3,8,7];
    pa.sampleVariance(myArray5, (result) => {
        console.log(result);
    });
    
<!-- ### .sDeviation (method)

> Standard deviation of a sample or population
    
    var pa = new Pan();
    var myArray6 = [1,2,3,8,7];
    var population = pa.popVariance(myArray6);
    var sample = pa.sampleVariance(myArray6);
    console.log('population standard deviation');
    console.log(pa.sDeviation(population));
    console.log('sample standard deviation');
    console.log(pa.sDeviation(sample));
    
## .add(method)

> Runs through array and adds its elements

    var pa = new Pan();
    var myArray7 = [1,2,3,8,7];
    console.log(pa.add(myArray7)); -->

    
