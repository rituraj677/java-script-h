//   let mydate=new Date()
//   console.log(mydate.toString());
//   console.log(mydate.toDateString())
//   console.log(mydate.toISOString())
//   console.log(mydate.toJSON())
//   console.log(mydate.toLocaleDateString())
//   console.log(mydate.toLocaleString())
//   console.log(mydate.toLocaleTimeString())
//   console.log(mydate.toTimeString())
//  console.log(typeof mydate)
   
// THIS IS ALL THE METHODS TO SHOW THE OUTPUT IN .TO TYPE
 let mycreatedDate= new Date("02-27-2026  ")
let createdDate=new Date(2026,0,26)
console.log(mycreatedDate.toLocaleString())

 let timestamp=Date.now()
 console.log(timestamp)
 console.log(mycreatedDate.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth()) 
console.log(newDate.getDay())

console.log(` the day is ${newDate.getDay()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default',
    {
        weekday:"long"
    }


)
console.log(newDate)

 
 
