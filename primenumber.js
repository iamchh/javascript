//take input from the user
const num=ParseInt(prompt('Enter a positive number:'));
      isprime=true;
//if number is equal to 1
if(num === 1){
  console.log('1 is composite nor prime number');
  }
//if number is greater than 1
else if(num>1){
  //for looping through 2 to number -1
  for(let i=2,i<num,i++){
   if(num%i == 0){
     isprime=false;
    break;
   }
  }
  if(isprime){
  console.log('The ${num} is prime number')
  esle{
  console.log('The ${num} is not a prime number')
      }
   }
//check number is less than 1
  else{
  console.log('The given number $(num) is not a  prime number')}
}  
