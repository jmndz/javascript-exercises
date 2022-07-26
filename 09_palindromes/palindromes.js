const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g,'');
    let reversedString = lowerCaseString.split('').reverse().join('');
    return reversedString === lowerCaseString;
}

// Do not edit below this line
module.exports = palindromes;
