let invalid = filter(transactions,  (transaction) => (transaction.amount === null||transaction.amount === undefined) ||transaction.amount<=0 || !(transaction.product === "FIG_JAM"
|| transaction.product === "FIG_JELLY" || transaction.product === "SPICY_FIG_JAM" || transaction.product === "ORANGE_FIG_JELLY")).length;
console.log(`Number of invalid transactions: ${invalid}`);
const empty = [];
let duplicates = pairIf(customers, empty, (customer1, customer2) => customer1.emailAddress===customer2.emailAddress);
console.log("Number of duplicate customers:"+ duplicates.length/2);
console.log("Most recent transaction over $200:");
console.log("Number of small transactions:");
console.log("Number of medium transactions:");
console.log("Number of large transactions:");
console.log("Customers with transactions over $200:");
console.log("Names of customers with transactions over $200"); 
function filter(data, predicate){
    let invalid = [];
    for(const i of data){
        if(predicate(i)){
           // console.log(i);
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
                data3.push({i:j});
            }
       }
       data2.push(i);
    }  
    return data3;  
}    
function reduce(data, reducer, intialValue){  
    let total = initialValue;  
    for(const i of data){  
      total = reducer(total,data[i]);
    }  
    return total;  
}   