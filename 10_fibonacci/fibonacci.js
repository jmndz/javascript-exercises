const fibonacci = function(num) {
  let result = 1;
  let prevNum = 0;
  if(num<0) return "OOPS";
  if(num===0) return 0;
  if(typeof num === "string") num = Number(num);
  for(let i=2;i<=num;i++){
    let tempNum = result;
    result += prevNum;
    prevNum = tempNum;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
