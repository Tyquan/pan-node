class Pan {
    mean(a){
        if (a.length == 0){
            return 0;
        } 
        else if(a.length == 1) {
            return a;
        }else {
            var sum = 0;
            for (var i = 0; i < a.length; i++) {
                sum += a[i];
            }
            sum = sum / a.length;
            return sum;
        }
    }

    // find the median average of a population or sample
    median(array){
        var sortedArray = array.sort();
        if (sortedArray.length % 2 == 0) {
            return 'sorted array is even ' + array.length;
        } else {
            var middle = Math.round(sortedArray.length / 2);
            return middle;
        }
    }

    // mode of a population or sample
    mode(array){
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

    // variance of a population
    popVariance(array){
        var temp = [];
        var reason = 0;
        var result;
        var mew = this.mean(array);
        for (var i = 0; i < array.length; i++) {
            temp.push(Math.pow(array[i] - mew, 2));
        }
        for (var j = 0; j < temp.length; j++) {
            reason += temp[j];
        }
        result = reason / array.length;
        return result;
    }

    // find the variance of a sample
    sampleVariance(array){
        var temp = [];
        var reason = 0;
        var result;
        var mew = this.mean(array);
        for (var i = 0; i < array.length; i++) {
            temp.push(Math.pow(array[i] - mew, 2));
        }
        for (var j = 0; j < temp.length; j++) {
            reason += temp[j];
        }
        result = reason / array.length - 1;
        return result;
    }

    // standard deviation of a sample or population
    // input must be a popVariance or sampleVariance
    sDeviation(input){
        var result = Math.sqrt(input);
        return result;
    }
}

// module.exports = Pan;

var list = [1,2,3,4,5,1,6];

var pan = new Pan();
var total = pan.sampleVariance(list);
var sdev = pan.sDeviation(total);

console.log(total);
console.log(sdev);
