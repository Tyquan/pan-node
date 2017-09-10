var i;

// Pan Object
function Pan(){
    this.mean = mean;
    this.median = median;
    this.mode = mode;
    this.popVariance = popVariance;
    this.sampleVariance = sampleVariance;
    this.sDeviation = sDeviation;
    this.add = add;
    this.subtract = subtract;
    this.multiply = multiply;
    this.divide = divide;
}

// find the mean average of a population or sample
function mean(array){
    var sum = 0;
    sum = this.add(array);
    sum = this.divide(sum, array.length);
    return sum;
}

// find the median average of a population or sample
function median(array){
    var sortedArray = array.sort();
    if (sortedArray.length % 2 == 0) {
        return 'sorted array is even ' + array.length;
    } else {
        var middle = Math.round(sortedArray.length / 2);
        return middle;
    }
}

// find the mode of a population or sample
function mode(array){
    var count = 1;
    var temp = 0;
    var tempCount;
    var popular = array[0];
    for (var i = 0; i < array.length - 1; i++){
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

// find the variance of a population
function popVariance(array){
    var temp = [];
    var reason = 0;
    var result;
    var mew = this.mean(array);
    for (i = 0; i < array.length; i++) {
        temp.push(Math.pow(array[i] - mew, 2));
    }
    for (var j = 0; j < temp.length; j++) {
        reason += temp[j];
    }
    result = reason / array.length;
    return result;
}

// find the variance of a sample
function sampleVariance(array){
    var temp = [];
    var reason = 0;
    var result;
    var mew = this.mean(array);
    for (i = 0; i < array.length; i++) {
        temp.push(Math.pow(array[i] - mew, 2));
    }
    for (var j = 0; j < temp.length; j++) {
        reason += temp[j];
    }
    result = reason / array.length - 1;
    return result;
}

// find the standard deviation of a sample or population
// input must be a popVariance or sampleVariance
function sDeviation(input){
    var result = Math.sqrt(input);
    return result;
}

// runs through array and adds its elements
function add(array){
    count = 0;
    for (i = 0; i < array.length; i++) {
        count+= array[i];
    }
    return count;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

module.exports = Pan;












