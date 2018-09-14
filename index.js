const math = require('mathjs');

class Pan {
    /* Statistics */

    mean(a){
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

    median(array){
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

    // mode of a population or sample
    // the most listed element in an array
    mode(array, next){
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

    // variance of a population
    popVariance(array){
        let temp = [];
        let reason = 0;
        let result;
        let mew = this.mean(array);
        for (let i = 0; i < array.length; i++) {
            temp.push(Math.pow(array[i] - mew, 2));
        }
        for (let j = 0; j < temp.length; j++) {
            reason += temp[j];
        }
        result = reason / array.length;
        return result;
    }

    // get the sample variance of an array
    samVariance(array){
        let temp = [];
        let count = 0;
        // get the mean average of an array
        let mew = this.mean(array);
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

    standardDeviation(array){
        /* get the Standard Deviation odf an array
        the square root of a variance */
       return Math.sqrt(this.variance(array));
    }

    variance(array){
        let n = array.length;
        let deviations = this.deMean(array);
        return this.sumOfSquares(deviations) / (n - 1);
    }

    coVariance(array, y) {
        /* Measures how 2 variables vary */
        let n = array.length;
        return this.dot(this.deMean(array), this.deMean(y)) / (n - 1);
    }

    correlation(array, y) {
        let standDeviationX = this.standardDeviation(array);
        let standDeviationY = this.standardDeviation(y);
        if (standDeviationX > 0 && standDeviationY > 0) {
            return this.coVariance(array, y) / standDeviationX / standDeviationY;
        } else {
            // if theres no variation, the correlation is 0
            return 0;
        }
    }

    /* Linear Algebra */

    getShape(matrix){
        /* get the rows and columns of a mtrix ([[1,2,3], [4,5,6]]) */
        let num_rows = matrix.length;
        let num_cols = matrix[0].length;
        return [num_rows, num_cols];
    }

    getRow(matrix, row) {
        /* get a specific row of a matrix */
        return matrix[row];
    }

    getColumn(matrix, column) {
        /* get a specific column of a matrix */
        let wilt = [];
        for (let i = 0; i < matrix.length; i++) {
            wilt.push(matrix[i][column]);
        }
        return wilt;
    }

    add(vector1, vector2) {
        /* Adds corresponding elements */
        let count = [];
        for (let i = 0; i < vector1.length; i++) {
            let result = vector1[i] + vector2[i];
            count.push(result);
        }
        return count;
    }

    subtract(vector1, vector2) {
        /* Subtracts corresponding elements */
        let count = [];
        for (let i = 0; i < vector1.length; i++) {
            let result = vector1[i] - vector2[i];
            count.push(result);
        }
        return count;
    }

    dot(v,w) {
        return math.dot(v, w);
    }

    sumOfSquares(v) {
        /* square the array then sum the same array */
        return this.dot(v,v);
    }

    magnitude(v) {
        return Math.sqrt(this.sumOfSquares(v));
    }

    squaredDistance(v, w){
        return this.sumOfSquares(this.subtract(v, w));
    }

    distance(v, w){
        return Math.sqrt(this.squaredDistance(v, w));
    }

    multiplyBy(scalar, vector) {
        /* multiply a vector by a scalar */
        let count = [];
        for (let i = 0; i < vector.length; i++) {
            count.push(scalar * vector[i]);
        }
        return count;
    }

    dataRange(array) {
        /* get the range of an array */
        return Math.max(...array) - Math.min(...array);
    }

    deMean(array) {
        let xBar = this.mean(array);
        let count = [];
        for (let i = 0; i < array.length; i++) {
            count.push(array[i] - xBar);
        }
        return count;
    }

}

module.exports = Pan;