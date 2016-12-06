function charSum (str) {
  return str
        .split('')
        .filter(item => +item)
        .reduce((sum, current) => {
          return sum + +current;
        }, 0);
  // let sum = 0;
  // for(var i = 0; i < str.length; i++) {
  //   if(parseInt(str.charAt(i)) >= 0)
  //     sum += parseInt(str.charAt(i));
  // }
  // return sum;
}
