const findTheOldest = function(obj) {
    let oldestPerson = 0;
    let nextOldest = 0;
    const d = new Date();
    const oldest = obj.sort(function(a,b){
        if(!a.yearOfDeath){ 
            oldestPerson = d.getFullYear() - a.yearOfBirth;
        }else{
            oldestPerson = a.yearOfDeath - a.yearOfBirth;
        }
        if(!b.yearOfDeath){ 
            nextOldest = d.getFullYear() - b.yearOfBirth;
        }else{
            nextOldest = b.yearOfDeath - b.yearOfBirth;
        }
        return oldestPerson > nextOldest ? -1:1;
    });
    return oldest[0];
};

 
// Do not edit below this line
module.exports = findTheOldest;
