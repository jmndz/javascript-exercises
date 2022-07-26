
const repeatString = function(string,num) {
    let message = '';
    if(num<0){
        message = "ERROR";
    }else{
        for(let i=0;i<num;i++){
            message += string;
        }
    }
    
    return message;
};

// Do not edit below this line
module.exports = repeatString;
