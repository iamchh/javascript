//program to check the armstrong number
//take input from the user
let sum=0;
const num=(prompt('Enter a number:'));
//creating temporary variable
let temp = num;
while(temp>0){
  //finding one's digit
  let remainder= temp % 10
  sum += remainder*remainder*remainder;
  //removing last digit from the number
  temp=ParseInt(temp/10);//float into integer
}
//check the condition
if(sum == num){
console.log('The given number ${num} is armstrong')
else
  console.log('The given number ${num} is not armstrong')
}
  
