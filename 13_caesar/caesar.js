const alphabetCapital = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
const caesar = function(string,num) {
    let newString = '';
    for(let i=0;i<string.length;i++){
        newString += caesarCode(string[i],num);
    }
    return newString;
};

const caesarCode = function(char,num) {
    let bool = true;
    let index = 0;
    let code = char;
    for(alph of alphabetCapital){
        if(char === alph){
            return code = unicode(bool,index+num);
        }
        index++;
    }
    index = 0;
    for(alph of alphabet){
        if(char === alph){
            bool = false;
            return code = unicode(bool,index+num);
        }
        index++;
    }

    return char;
};

const unicode = function(bool,index){
    for(;;){
        if(index<0) index += 26;
        else if(index>25) index -= 26 ;
        else break;
    }
    if(bool === true){
        return alphabetCapital[index];
    }else{
        return alphabet[index];
    }
};

// Do not edit below this line
module.exports = caesar;
