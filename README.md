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
* 0.3.0 Updated Statistics and Linear Algebra library

## Documentation

### Usage Example (pan-node.mean)

    var Pan = require("pan-node");
    var arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    Pan.mean(arrays, (data) => {
        console.log(data);
    });
    
### Statistics

    pan-node.mean; (Mean Average of an array)
    pan-node.median; (Median Average of an array)
    pan-node.mode; (Mode Average of an array)
    pan-node.popVariance; (Population Variance)
    pan-node.samVariance; (Sample Variance)
    pan-node.standardDeviation; (Standard Deviation of an array)
    pan-node.variance; (Variance of an array)
    pan-node.coVariance;
    pan-node.correlation;

### Probability

    pan-node.uniformPdf;
    pan-node.uniformCdf; (Cumulative density function)
    pan-node.normalCdf;

### Linear Algebra (Vectors / Matrix)

    pan-node.getShape;
    pan-node.getRow;
    pan-node.getColumn;
    pan-node.add;
    pan-node.subtract;
    pan-node.dot;
    pan-node.sumOfSquares;
    pan-node.magnitude;
    pan-node.squaredDistance;
    pan-node.distance;
    pan-node.multiplyBy;
    pan-node.dataRange;
    pan-node.deMean;