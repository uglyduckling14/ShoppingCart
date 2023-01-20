let invalid = filter(transactions,  (transaction) => (transaction.amount === null||transaction.amount === undefined) ||transaction.amount<=0 || !(transaction.product === "FIG_JAM"
|| transaction.product === "FIG_JELLY" || transaction.product === "SPICY_FIG_JAM" || transaction.product === "ORANGE_FIG_JELLY")).length;
console.log(`Number of invalid transactions: ${invalid}`);
const empty = [];
let duplicates = pairIf(customers, customers, (customer1, customer2) => {if((customer2.emailAddress=== customer1.emailAddress)&& (customer1.id !== customer2.id)){
  return true;
}
});
let blankSm = [];
console.log("Number of duplicate customers: "+ duplicates.length/2);
console.log("Most recent transaction over $200: $"+ findLast(transactions,(transaction) => transaction.amount>200).amount);
let small =reduce(transactions,(transaction,initial) => {if(transaction.amount < 25){
  //console.log(initial);
  initial.push(transaction);
  }
  return initial;
},blankSm)
console.log("Number of small transactions: "+ small.length);
let blankMed = [];
let medium = reduce(transactions,(transaction,initial) => {if(transaction.amount >= 25&& transaction.amount<75){
  //console.log(initial);
  initial.push(transaction);
  }
  return initial;
},blankMed);
console.log("Number of medium transactions: "+ medium.length);
let blankLarge = [];
let large = reduce(transactions,(transaction,initial) => {if(transaction.amount >= 75){
  //console.log(initial);
  initial.push(transaction);
  }
  return initial;
},blankLarge);
console.log("Number of large transactions: " +large.length);
let over200 = filter(transactions, (transaction) => transaction.amount>200 && transaction.amount != null && transaction.amount != undefined && transaction.amount>0 && (transaction.product === "FIG_JAM" || transaction.product === "FIG_JELLY" || transaction.product === "SPICY_FIG_JAM" || transaction.product === "ORANGE_FIG_JELLY"));

let entry = [];
// //Get each customer name and id first! create array and pair it to the customerId
let paired = pairIf(customers, over200, (customer, transaction)=> transaction.customerId === customer.id);

let unique = reduce(paired, (smallerArray,uniqueArray)=>{if(!uniqueArray.includes(smallerArray[1])){
  uniqueArray.push(smallerArray[1]);
}
return uniqueArray;},entry)
let mapped = map(unique, (customer) => customer.firstName + " "+ customer.lastName);
console.log("Customers with transactions over $200:");
console.log(unique);
console.log("Names of customers with transactions over $200: ");
console.log(mapped);
function filter(data, predicate){
    let invalid = [];
    for(const i of data){
        if(predicate(i)){
            invalid.push(i);
        }
    }
    return invalid;
}
function findLast(data, predicate) {  
  const valid = filter(data,predicate);  
  return valid[valid.length-1];  
} 
function map(data, callback){  
    const newData = [];  
    for(const i of data){   
      newData.push(callback(i));
    }  
    return newData;  
}
function pairIf(data1, data2, callback){  
    let data3 = [];  
    for(const i of data1){  
       for(const j of data2){
            if(callback(i,j)){
              data3.push([j,i]);
            }
       }
    }  
    return data3;  
}    
function reduce(data, reducer, initialValue){ 
  let total=initialValue;   
  for(const i of data){
      total= reducer(i,initialValue);
  } 
  return total;
     
}
