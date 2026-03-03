 //singleton//
 
 //When we declare the object with constructor it forms the singleton 
// When we declare the object with litralls it doesnt make singleto object 

//object litrals

const mysym=Symbol['key1']

const jsuser={
    name:'Happy',
    'fullname':'happy jha',
    [mysym]:123,//when we  do not use brackets then it is considered as string only not as a symbol

    age:21,

    location:"sitamrhi",
    isLoggedin:false,
    lastloginDays:['mondday','saturday']

}


console.log(jsuser["fullname"])
console.log(jsuser[mysym])//for accessing symbol we have to use brackets
jsuser.age=22
// Object.freeze(jsuser)//from here the object is freezed no one change it from here
jsuser.age=34
//console.log(jsuser.age)

jsuser.greeting = function(){

    console.log("heloo js user")
} 
 //console.log(jsuser.greeting())


