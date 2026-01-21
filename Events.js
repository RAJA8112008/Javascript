let div=document.querySelector("#parentBox");
// div.onclick=()=>{
//     console.log("Yes i am here 2");
// }

// div.onmouseover=()=>{
//     console.log('You are inside the div');
// }


      //Used for adding Multiple Events
  div.addEventListener("click",()=>{
    console.log("Hello i am here inside Div");
  });
  
  div.addEventListener("click",()=>{
    console.log("Hello we are here inside Div");
  });