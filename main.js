function sum(a,b,...args){// rest operator 
    let numSum = 0;
    let product = a * b;
    for(const arg of args){
        numSum+=arg;

    }
   return [product,numSum];

}
console.log(sum(2,2,1,2,3,4,5,10,10)); //spread operator 
//Design a function to return multiplication of first two arguments and sum of the rest 