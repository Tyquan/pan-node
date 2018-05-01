class Pan {
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
            return array.length;
        } else {
            var middle = Math.round(sortedArray.length / 2);
            return middle;
        }
    }

    // mode of a population or sample
    // the most listed element in an array
    mode(array){
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
}

module.exports = Pan;







// // find the variance of a sample
// sampleVariance(array){
//     let temp = [];
//     let reason = 0;
//     let result;
//     var mew = this.mean(array);
//     for (let i = 0; i < array.length; i++) {
//         temp.push(Math.pow(array[i] - mew, 2));
//     }
//     for (let j = 0; j < temp.length; j++) {
//         reason += temp[j];
//     }
//     result = reason / array.length - 1;
//     return result;
// }

// // standard deviation of a sample or population
// // input must be a popVariance or sampleVariance
// sDeviation(input){
//     let result = Math.sqrt(input);
//     return result;
// }

// module.exports.mean = mean;
// module.exports.median = median;