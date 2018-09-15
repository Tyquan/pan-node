const math = require('mathjs');

/* Statistics */
exports.mean = mean;
exports.median = median;
exports.mode = mode;
exports.popVariance = popVariance;
exports.samVariance = samVariance;
exports.standardDeviation = standardDeviation;
exports.variance = variance;
exports.coVariance = coVariance;
exports.correlation = correlation;

/* Probability */
exports.uniformPdf = uniformPdf;
exports.uniformCdf = uniformCdf;
//exports.normalPdf = normalPdf;
exports.normalCdf = normalCdf;

/* Linear Algebra */
exports.getShape = getShape;
exports.getRow = getRow;
exports.getColumn = getColumn;
exports.add = add;
exports.subtract = subtract;
exports.dot = dot;
exports.sumOfSquares = sumOfSquares;
exports.magnitude = magnitude;
exports.squaredDistance = squaredDistance;
exports.distance = distance;
exports.multiplyBy = multiplyBy;
exports.dataRange = dataRange;
exports.deMean = deMean;



function mean(a) {
    /* find the average number in an array */
    if (a.length == 0){
        return 0;
    } 
    else if(a.length == 1) {
        return a;
    }else {
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i];
        }
        sum = sum / a.length;
        return sum;
    }
}

function median(array) {
    /* median average of a population or sample
    The middle number in an array */
    let sortedArray = array.sort();
    if (sortedArray.length % 2 == 0) {
        next(array.length);
    } else {
        var middle = Math.round(sortedArray.length / 2);
        return middle;
    }
}

function mode (array) {
    // mode of a population or sample
    // the most listed element in an array
    let count = 1;
    let temp = 0;
    let tempCount;
    let popular = array[0];
    for (let i = 0; i < array.length - 1; i++){
        temp = array[i];
        tempCount = 0;
        for (var j = 1; j < array.length; j++) {
            if (temp == array[j]) {
                tempCount++;
            }
            if (tempCount > count) {
                popular = temp;
                count = tempCount;
            }
        }
    }
    return popular;
}

function popVariance (array) {
    // variance of a population
    let temp = [];
    let reason = 0;
    let result;
    let mew = mean(array);
    for (let i = 0; i < array.length; i++) {
        temp.push(Math.pow(array[i] - mew, 2));
    }
    for (let j = 0; j < temp.length; j++) {
        reason += temp[j];
    }
    result = reason / array.length;
    return result;
}

function samVariance (array) {
    // get the sample variance of an array
    let temp = [];
    let count = 0;
    // get the mean average of an array
    let mew = mean(array);
    // loop through each item in the array
    for (let i = 0; i < array.length; i++){
        // and push the calculated () result to the array for each item
        temp.push(Math.pow(array[i] - mew, 2));
    }
    // loop through each item
    for (let j = 0; j < temp.length; j++) {
        // and add its total to the count
        count += temp[j];
    }
    // let the result eqaul to the count divided by the length of the array argument
    let result = count / array.length;
    return result;
}

function standardDeviation (array) {
    /* get the Standard Deviation odf an array
    the square root of a variance */
   return Math.sqrt(variance(array));
}

function variance (array) {
    let n = array.length;
    let deviations = deMean(array);
    return sumOfSquares(deviations) / (n - 1);
}

function coVariance (array, y) {
    /* Measures how 2 variables vary */
    let n = array.length;
    return dot(deMean(array), deMean(y)) / (n - 1);
}

function correlation (array, y) {
    let standDeviationX = standardDeviation(array);
    let standDeviationY = standardDeviation(y);
    if (standDeviationX > 0 && standDeviationY > 0) {
        return coVariance(array, y) / standDeviationX / standDeviationY;
    } else {
        // if theres no variation, the correlation is 0
        return 0;
    }
}

function uniformPdf (x) {
    /* uniform probability density function */
    if (x >= 0) {
        return 1;
    } else {
        return 0;
    }
}

function uniformCdf (x) {
    /* uniform cumulative distribution function */
    if (x < 0) {
        return 0;
    } else if (x < 1) {
        return x;
    } else {
        return 1;
    }
}

// function normalPdf (x, mu=0, sigma=1) {
//     /* normal probability density function */
//     let dense = Math.sqrt(2 * Math.PI);
//     return (math.exp(-(x - mu) ** 2 / 2 / sigma ** 2) / (dense * sigma));
// }

function normalCdf (x, mu=0, sigma=1) {
    /* normal cumulative distribution function */
    return (1 + math.erf((x - mu) / Math.sqrt(2) / sigma)) / 2;
}

function getShape (matrix) {
    /* get the rows and columns of a mtrix ([[1,2,3], [4,5,6]]) */
    let num_rows = matrix.length;
    let num_cols = matrix[0].length;
    return [num_rows, num_cols];
}

function getRow (matrix, row) {
    /* get a specific row of a matrix */
    return matrix[row];
}

function getColumn (matrix, column) {
    /* get a specific column of a matrix */
    let wilt = [];
    for (let i = 0; i < matrix.length; i++) {
        wilt.push(matrix[i][column]);
    }
    return wilt;
}

function add (vector1, vector2) {
    /* Adds corresponding elements */
    let count = [];
    for (let i = 0; i < vector1.length; i++) {
        let result = vector1[i] + vector2[i];
        count.push(result);
    }
    return count;
}

function subtract (vector1, vector2) {
    /* Subtracts corresponding elements */
    let count = [];
    for (let i = 0; i < vector1.length; i++) {
        let result = vector1[i] - vector2[i];
        count.push(result);
    }
    return count;
}

function dot (v,w) {
    return math.dot(v, w);
}

function sumOfSquares (v) {
    /* square the array then sum the same array */
    return dot(v,v);
}

function magnitude (v) {
    return Math.sqrt(sumOfSquares(v));
}

function squaredDistance (v, w) {
    return sumOfSquares(subtract(v, w));
}

function distance (v, w) {
    return Math.sqrt(squaredDistance(v, w));
}

function multiplyBy (scalar, vector) {
    /* multiply a vector by a scalar */
    let count = [];
    for (let i = 0; i < vector.length; i++) {
        count.push(scalar * vector[i]);
    }
    return count;
}

function dataRange (array) {
    /* get the range of an array */
    return Math.max(...array) - Math.min(...array);
}

function deMean (array) {
    let xBar = mean(array);
    let count = [];
    for (let i = 0; i < array.length; i++) {
        count.push(array[i] - xBar);
    }
    return count;
}