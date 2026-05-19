/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(arr) {
    let minAmount = arr[0];
    let maxProfit = 0;
    
    for(let i=1;i<arr.length;i++){
        
        if(arr[i] - minAmount > maxProfit ){
            maxProfit = arr[i] - minAmount ;
        }
        
        if(arr[i] < minAmount){
            minAmount = arr[i]
        }

    }
    return maxProfit;
    
};