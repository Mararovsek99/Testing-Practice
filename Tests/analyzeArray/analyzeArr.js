
function analyzeArray(array){
    let object = {
        average: null,
        min: null,
        max: null,
        length: null
    }
    object.length = array.length;
    object.min = Math.min(...array);
    object.max = Math.max(...array);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    object.average = sum / array.length;
    return object;
}









module.exports = analyzeArray;