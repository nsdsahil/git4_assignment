let num = 13;
let count = 0;
for(let i = 1; i <= num; i++){
    if(num % i == 0) count++;
}
if(count ) console.log("prime");
else console.log("not prime");