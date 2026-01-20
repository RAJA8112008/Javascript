let items=["Bloomburg","Microsoft","Google","GFG"];
//Remove first company from array 1. pop (Del end) 2.shift(Del starting)
      //  items.shift();
      //  console.log(items)

 //Remove GFG and add Uber
 items.splice(3,1,'Uber');
 console.log(items);

 //Add Amazon at End  
 //1. push
 items.push('Amazon');
 console.log(items);
 //2. Unshift->adds at First position
  