// Let, Const, Var
/*console.log(false == '0');
console.log(null === undefined);
console.log(10 === '10');
console.log(10 == '10');
console.log(true === 1);
console.log(null == undefined);
console.log(false == 0);
console.log(false === 0);
console.log(true == 1);
*/
const nums = [10,20,8,17];
nums.filter(e => e > 10);
console.log(nums); // code prints the entire array

const num = [30,35,42,20,15];
console.log(num.every(num => num > 20));