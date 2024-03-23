function printMe(){  //function declaration //function defination
  console.log("Printing money");

}
printMe(); // function call 

function printThis(param){ // param is called parameters
  console.log(param);
}
printThis("tapas");
function printThis(param){ // param here means that we are passing a parameter
  return 'Juma has imposter syndrome';
}
printThis("Juma is coding now");// passing an argument
console.log("Juma is learning Java script");

// FUNCTION EXPRESSION
const printMeAgainWithParam = function(a, b){
    console.log(a, b);
}
  //RETURNING FUNCTION
  //RETURNING FUNCTION
  function  sum(a, b){
    return a+b;
}

 console.log(sum(2,3));

 //REST PARAMETER
 function CollectThings(x , ...y){
  console.log(x);
  console.log(y);
}
CollectThings(1,2,3,4,5,6,7,8,9);
