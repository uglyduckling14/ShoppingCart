# Assn1

## Introduction:

Collect and sort arrays of data. Return number of Transactions and Customers.

### Transactions:
{  
  id: 12345, // a number uniquely identifying the transaction  
  amount: 110.85, // a number indicating the amount in dollars the transaction was for  
  product: "FIG_JAM", // a string indicating the type of product; one of ["FIG_JAM", "FIG_JELLY", "SPICY_FIG_JAM", "ORANGE_FIG_JELLY"]  
  customerId: 12345, // a number that stores the ID of the customer that made the transaction.  
}  
*Transactions are invalid if amount is $0 or missing or product is not one of four values: FIG_JAM, FIG_JELLY, SPICY_FIG_JAM, or ORANGE_FIG_JELLY. 
### Customers:
{  
  id: 34567, // a number that uniquely identifies a customer  
  firstName: "Alan",  
  lastName: "Turing",  
  emailAddress: "alan.turing@internet.com"  
}  
*Customers are considered duplicates if they contain the same email, name is irrelevant

## Reported Information:

Number of invalid transactions(filter)->int
Number of duplicate customers(pairIf)->int  
Amount for most recent transaction over $200(findLast)-> int  
Number of small, medium, large transactions(reduce) -> dict{ small: int x, medium: int y, large: int z}  
- small<$25  
- $25<medium<$75  
- large>=$75  
Customers with at least one transaction over $200(pairIf, reduce, filter, map) -> Customers[] and String["firstname lastname"]  
## ONLY THESE 5 FUNCTIONS CAN BE USED!!!  
### Filter
/*  
  filter: returns a subset of the input data that contains only the items for which the predicate returns true  
  @data: an array of any arbitrary data  
  @predicate: a function that takes a single datapoint as an argument. Returns either true or false.  
  @return: a new array that contains all of the values in data
           for which the predicate function returns true  
*/   
function filter(data, predicate){
  let valid = [];  
  for (const i of data){  
    if(predicate = true){  
      add i to array valid  
    }  
  }  
  return valid;  
}
#### Example:
const data = [1,2,3,4,5,6,7];  
const result = filter(data, x => x % 2 === 0);  
console.log(result); // [2,4,6];  

### findLast
/*  
  findLast: finds the last value in an array that meets the condition specified in the predicate  
  @data: an array of any arbitrary data  
  @predicate: a function that takes a single datapoint as an argument. Returns either true or false.  
  @return: a single data point from data  
*/  
function findLast(data, predicate)// use filter {  
  const valid = filter(data,predicate);  
  return last value of valid;  
} 
#### Example:
const data = [1,2,3,4,5,6,7];  
const result = findLast(data, x => x % 2 == 0);  
console.log(result); // 6  

### map
/*  
  map: creates a new array based on the input array where the value at each position in the array is the result of the callback function.  
  @data: an array of any arbitrary data  
  @callback: a function that takes a single datapoint as an argument. Returns a new value based on the input value  
  @return: an array
*/  
function map(data, callback){  
  const newData = [];  
  for(const i of data){  
    add callback(i) to newData  
  }  
  return newData;  
}  
#### Example:
const data = [1,2,3,4,5,6,7];  
const doubles = map(data, x => x * 2);  
console.log(doubles); // [2,4,6,8,10,12,14];  
const strings = map(data, x => `${x}`);  
console.log(strings); // ["1","2","3","4","5","6","7"];  

### pairIf
/*  
  pairIf: creates a new array based on the input arrays where the value at each position is an 
          array that contains the 2 values that pair according to the predicate function.  
  @data1: an array of any arbitrary data  
  @data2: an array of any arbitrary data  
  @predicate: a function that takes a single datapoint from each input array as an argument. Returns true or false  
  @return: a single data point from data  
*/  
function pairIf(data1, data2, callback){  
  let data3 = [];  
  for(const i of data1){  
    for(const j of data2){  
      if callback==true{  
        add i and j to data3;  
      }  
    }  
  }  
  return data3.length;  
}    
#### Example:
const labels = ["positive", "negative"];  
const nums = [1, -3, -5, 12];  
const pairs = pairIf(labels, nums, (label, num) => {  
  return (label === "negative" && num < 0) || (label === "positive" && num >= 0);  
});  
console.log(pairs); // [["positive", 1], ["positive", 12], ["negative", -3], ["negative", -5]];  

### reduce
/*  
  reduce: creates an accumulated result based on the reducer function. The value returned is returned
          is the return value of the reducer function for the final iteration.  
  @data: an array of any arbitrary data  
  @reducer: a function that takes a single datapoint from each input array as an
            argument and the result of the reducer function from the previous iteration.  
            Returns the result to be passed to the next iteration  
  @initialValue: the starting point for the reduction.  
  @return: the value from the final call to the reducer function.  
*/  
function reduce(data, reducer, intialValue){  
  let total = initialValue;  
  for(const i of data){  
    if reducer{  
      total++;  
    }  
  }  
  return total;  
}  
#### Example:
const nums = [1,2,3,4,5];  
const sum = reduce(nums, (value, accumulatedResult) => value + accumulatedResult, 0);  
console.log(sum); // 15  

const evensAndOdds = reduce(nums, (value, acc) => {  
  if (value % 2 == 0) {  
    acc.evens.push(value);  
  } else {  
    acc.odds.push(value);  
  }  
  return acc;  
}, {evens: [], odds: []});  

console.log(evensAndOdds); //{evens: [2,4], odds: [1,3,5]};  

### Complete Output:
Number of invalid transactions: 43 //console.log(filter(transactions, (transaction) => transaction.amount === null || transaction.amount < 0 || (transaction.product!==FIG_JAM, FIG_JELLY, SPICY_FIG_JAM, or ORANGE_FIG_JELLY. ")).length)   
Number of duplicate customers: 28  //console.log(pairIf(Customers, Customers2, (customer1, customer2) => customer1.emailAddress===customer2.emailAddress))  
Most recent transaction over $200: $232.53 //console.log(findLast(Transactions, transaction => transaction.amount>200))   
Number of small transactions: 2432 //console.log(reduce(Transactions,(transaction, total) => transaction.amount<25))    
Number of medium transaction: 234 // console.log(reduce(Transactions,(transaction, total)=> transaction.amount>25 and transaction.amount< 75))  
Number of large transactions: 43 //console.log(reduce(Transactions,(transaction, total) => transaction.amount>==75))  
Customers with transactions over $200: // first get all customerIDs with over 200: filter(transactions, (transaction) => transaction.amount>200));  
                                       // pair each customer with transaction using ID: pairIf(filtered transactions, Customers, (transaction, Customer) => transaction.id ===          
                                       // Customer.customerid)  
                                       // reduce all duplicate customers: reduce(??)   
[...]  
Names of customers with transactions over $200" // map over reduced customers to get customer names  
[...]   