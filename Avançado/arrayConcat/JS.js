const num = [1,2,3];
const num1 = [4,5,6];
// const num2 = num.concat(num1,[7,8,9], 'Lucas ');
const num2 =  [...num,'Luiz', ...num1]
console.log(num2);