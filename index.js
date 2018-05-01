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
    statDeviation(array){
        return Math.sqrt(this.samVariance(array));
    }
}

module.exports = Pan;