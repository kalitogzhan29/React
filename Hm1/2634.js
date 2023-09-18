/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    for(const i in arr){
        console.log(typeof i)
        if(fn(arr[i], Number(i)))  filteredArr.push(arr[i])
    }
    return filteredArr;
};