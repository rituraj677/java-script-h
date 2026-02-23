//****Memory Management*//

//Stack(primitve) ,Heap(Non-primitive)

let myname ="happy"
let anothername=myname
anothername="Ritu Raj"
console.log(anothername)//Ritu Raj
console.log(myname)//Still "happy"

//In stack copy is geeting passed thats why value of myname didn't changed .original value is still there//

let user1={
    email:"happy@12",
    upi:"user@ybl"

}

let user2=user1

user2.email="happy@90"
console.log(user1)//"happy@09"
console.log(user2)//"happy09"


//In heap reference is passed thats why entire object changed //



  



