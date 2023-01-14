 
function filter(data, predicate){
    let valid = [];
    for(const i of data){
        if(predicate){
            valid.push(data);
        }
    }
    return valid;
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
        if (callback(i) && callback(j)){  
          data3.push({i:j}); 
        }  
      }  
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