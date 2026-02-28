//array

const myarr=[0,1,2,3,4,5,]
myarr.push(6);
myarr.pop()
myarr.unshift(9)
myarr.shift() 
console.log(myarr)

const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

marvel.push(dc);
console.log(marvel)
console.log(marvel[3][2])

const all= marvel.concat(dc)
console.log(all)

const allnew=[...marvel,...dc]
console.log(allnew)

const another=[1,2,3,[4,5,6],[6,7,[4,5]]]

let usable_array=another.flat(Infinity)
console.log(usable_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("happy"))

console.log(Array.from({name:'RUCHI'}))//INTRESTING THING HERE TO NOTICE

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))