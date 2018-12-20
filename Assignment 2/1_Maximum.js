var numbers = [23, 89, 6, 29, 56, 45, 77, 32];
var max = Maximum(numbers);
console.log("Maximum number is :" + max);
function Maximum(numArray) {
    var maxNum = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        if (maxNum < numArray[i])
            maxNum = numArray[i];
    }
    return maxNum;
}
