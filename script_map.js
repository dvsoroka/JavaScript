myArr = [-3.5, 8.5, -45.5, 6, 34, 0.5, 0.534, 3, 12, [1, 0.4, -0.5, -5, 24, 54]];
mySortedSquareed = (arr) => {
    result = arr.filter(num => Number.isInteger(num) && num > 0).map(number => number * number);
    return result;
}

console.log(mySortedSquareed(myArr));