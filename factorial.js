//program to find the factorial of number
//take input from the user
const number= ParseInt(prompt('Enter a positive integer');
console.log('The factorail of given number is ${number}');
//if number is negative
if(number<0){
  console.log('Error! factorial of negative integer does not exist');
  }
//if number is 0
else if(number === 0){
  console.log('The factorial of ${number} is 1')
  }
//In number is positive 
else{
let fact=1;
for(i=1,i<=number,i++){
  fact *=i;
  }
  console.log('The factorial of  ${number} is ${fact}');
}
