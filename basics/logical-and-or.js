let isGeustOneVegan = false;
let isGuestTwoVegan =true;

// if (isGeustOneVegan && isGuestTwoVegan ){
//   console.log("only offer vegan dishes")
// } else if(isGeustOneVegan === false && isGuestTwoVegan===false){
//     console.log("offer anything on the menu")
// } else{
//     console.log("make sure you offer some vegan options")
// }

if (isGeustOneVegan && isGuestTwoVegan ){
    console.log("only offer vegan dishes")
  } else if(isGeustOneVegan || isGuestTwoVegan){
      console.log("offer anything on the menu")
  } else{
      console.log("make sure you offer some vegan options")
  }  