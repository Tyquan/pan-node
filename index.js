const math = require('mathjs');

class Pan {
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

    // find the average number in an array
    mean(a){
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

    // median average of a population or sample
    // The middle number in an array
    median(array){
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

    // get the Standard Deviation odf an array
    // the square root of a variance
    statDeviation(array, next){
       return Math.sqrt(this.samVariance(array));
    }

    multiplyBy(scalar, vector) {
        /* multiply a vector by a scalar */
        let count = [];
        for (let i = 0; i < vector.length; i++) {
            count.push(scalar * vector[i]);
        }
        return count;
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
}

module.exports = Pan;