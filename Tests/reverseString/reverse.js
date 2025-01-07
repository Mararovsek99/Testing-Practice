function reverse(string){
    
    if (!string) {
        return "";
    }

    let Array = string.split("");
    Array = Array.reverse();
    let reverseString = "";
    while(Array[0]){
        reverseString = reverseString + Array.shift().toString();
    }
    return reverseString;
}

module.exports = reverse;