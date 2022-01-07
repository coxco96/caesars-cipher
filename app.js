function rot13(str) {

    let strCopy = [...str];
    let newArr = [];
    let secondArr = [];
    let lastArr = [];
    let codeCracked = "";


    //convert the letters to unicode in newArr in this loop
    for (let i = 0; i < str.length; i++) {
        let charCode = strCopy[i].charCodeAt();
        // if it's a capital letter, push the unicode to newArr
        if (charCode >= 65 && charCode <= 90) {
            let charCode = strCopy[i].charCodeAt();
            newArr.push(charCode);
            // if it's not a capital letter, push the character as is to newArr
        } else {
            newArr.push(strCopy[i])
        }
    }

    //convert the unicode value to the new unicode value
    for (let i = 0; i < str.length; i++) {
        // if it's a letter, change the unicode value
        if (newArr[i] >= 65 && newArr[i] <= 90) {
            // loop back to 90 if we go below 65 when we subtract 13
            if (newArr[i] - 13 >= 65) {
                secondArr.push(newArr[i] - 13)
            } else {
                let remainderVal = newArr[i] - 13;
                remainderVal = 65 - remainderVal;
                remainderVal = 91 - remainderVal;
                secondArr.push(remainderVal);
            }
            // if it's a character, push it as is
        } else {
            secondArr.push(newArr[i])
        }
    }

    // convert new unicode values back to letters
    for (let i = 0; i < str.length; i++) {
        if (newArr[i] >= 65 && newArr[i] <= 90) {
            lastArr.push(String.fromCharCode(secondArr[i]))
        } else {
            lastArr.push(secondArr[i]);
        }
    }
    //change the array back into a string
    codeCracked = lastArr.join("")


    return codeCracked;
}

console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP