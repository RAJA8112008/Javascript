let div=document.querySelector("#parentBox");
// div.onclick=()=>{
//     console.log("Yes i am here 2");
// }

// div.onmouseover=()=>{
//     console.log('You are inside the div');
// }


      //Used for adding Multiple Events


//   div.addEventListener("click",()=>{
//     console.log("Hello i am here inside Div");
//   });
  
//   div.addEventListener("click",()=>{
//     console.log("Hello we are here inside Div");
//   });

     /*Remove AddeventLisner*/
  //store for removing Process
const Handler=()=>{
     console.log("Handler 3");
}

   div.addEventListener("click",()=>{
    console.log("Handler 1");
      });

      div.addEventListener("click",()=>{
    console.log("Handler 2");
      });
      div.addEventListener("click","Handler");
      div.addEventListener("click",()=>{
    console.log("Handler 4");
      });

      div.removeEventListener("click",'Handler');


