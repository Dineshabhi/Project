
// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":

// if (hour < 20) {
//     greeting = "Good day";
//   }else {
//     greeting = "Good evening";
//   }

  //-----------------------------------------//

//   let i=50
//   if (i < 10) {
//     greeting = "Good morning";
//   } else if (i < 20) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }

  //---------------------------------//














//   let i = 10;
 
// if (i < 15)
//     console.log("i is less than 15");
// else
//     console.log("I am Not in if");

//-------------------------------------// if else 

// let i = 10; 
//  if (i == 10)
//     console.log("i is 10");
// else if (i == 15)
//     console.log("i is 15");
// else if (i == 20)
//     console.log("i is 20");
// else
//     console.log("i is not present");

//-------------------------------// nested if

// -----------JavaScript program to illustrate nested-if statement
// let i = 10;
 
// if (i == 10) {  // First if statement
//     if (i < 15) {
//         console.log("i is smaller than 15");
//         // Nested - if statement
//         // Will only be executed if statement above
//         // it is true
//         if (i < 12)
//             console.log("i is smaller than 12 too");
//         else
//             console.log("i is greater than 15");
//     }
// }

//----------------------------------//nested if statement

function otpGenerate(){
  let otpshow=document.getElementById('otp');
  let digits='0123456789';
  let otp='';
  for(let i=0;i<4;i++){
    otp+=digits[Math.floor(Math.random()*10)];
  }
  otpshow.innerHTML='<span></span>';
  setTimeout(()=>{
    otpshow.innerHTML=otp;
  },3000);
}