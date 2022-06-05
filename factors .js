//program to find the factors of given positive number
//take input
const num=prompt('Enter a positive number:');
console.log('The factors of given positive number is ${num}:');
//looping through 1 to mun
for(i=1,i<=num,i++){
//check the number is factor
if(num%i==0){
console.log(i);
  }
 }
