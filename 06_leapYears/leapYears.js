const leapYears = function(year) {
    let val = 0;
    if(year%4===0){
        val++;
        if(year%100===0){
            val++;
            if(year%400===0) val++;
        }
    }

    if(val===1 || val===3) return true;
    if(val===0 || val===2) return false;
};

// Do not edit below this line
module.exports = leapYears;
