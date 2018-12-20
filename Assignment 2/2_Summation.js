var numbers = [23, 6, 7, 4, 5, 7];
var sums = Summation(numbers);
console.log("Summation of numbers is :" + sums);
function Summation(numArray) {
    var sum = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    return sum;
}
