               /*Objects*/ 
// const student={
//     fullName:'Raja',
//     marks:92,
//     printMarks: function(){
//         console.log('Marks= ',this.marks);
//     }
// }


// const  employee={
//     calculateTax(){
//         console.log("Tax is 10%");
//     }
// }
//  const Ramu={
//     salary:25000,
//  }
//  //to prototype one obj to another Obj
//  Ramu.__proto__=employee;

               /* Classes*/

//  class Car{
//     start(){
//         console.log("Start");
//     }
//     stop(){
//         console.log("Stop");
//     }
//     //constructor->constructor invoke itself with object as newcarobj
//     constructor(brand){
//         console.log("Car is created");
//         this.brand=brand;
//     }
//  }
//  //obj creation->this obj conatins all class properties
//  let newcar=new Car("fortuner");
// //  console.log("new car",newcar);


                /*Inheritance*/

//     class parent{
//         hello(){
//               console.log("Hello");
//         }
//     }
//       //inherit parent properties into child
//    class child extends parent {};
//    let obj=new child();
//    console.log(obj);
//    console.log(obj.hello());

class Person{
    eat(){
        console.log("Eat");
    }

     sleep(){
        console.log("Sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("Problem solving");
    }
}
let rahulobj=new Engineer();
console.log(rahulobj)