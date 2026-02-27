 const score=400
 console.log(score)

// const balance =new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))//it gives a fixed number of didgits you have given to print after decimal
// //output 100.0
// const otherNumber=123.8966
// console.log(otherNumber.toPrecision(4))//It counts the total number of digits irrespective of decimal n all
// //output 123.8
// const aaa= otherNumber.toFixed(2);
// const hundred=10000000;
// console.log(hundred.toLocaleString('en-IN'))// It gives the comma thing and returns the value 10,00,000
// console.log(typeof aaa)
//**ALL GIVES THE VALUE IN STRING TYPE */


//**********MATHS PART **********//

console.log(Math);

console.log(Math.abs(-100));
console.log(Math.round(4.6))

console.log(Math.ceil(4.01));
console.log(Math.floor(4.9))
console.log(Math.min (4,5,6,7,8))

console.log(Math.random())
console.log(Math.floor(Math.random()*10) +1)

const min=10
const max=20
//General Formula (Very Important)

//To generate a random number between min and max:

//Math.floor(Math.random() * (max - min + 1)) + min;
console.log(Math.floor(Math.random() * (max-min+1))+min )
//Math.random() is used to generate a random decimal number.

//👉 It gives a number between 0 (inclusive) and 1 (exclusive).


