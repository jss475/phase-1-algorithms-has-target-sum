function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i = 0; i < array.length; i++){
    let targetDiff = target - array[i]
    let filtered = array.filter(num => num === targetDiff)
    debugger
    if(filtered.length > 1){
      return true
    }else if(filtered[0] === array[i]){
      return false
    }else if(filtered[0] === (targetDiff)){
      return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here

  //check to see what number is needed to return true. i.e target = 10. 1st value is 3. Filter for 7
  //if that value exists, return true
  //if it doesn't, go to next number in array

*/

/*
  Add written explanation of your solution here

  //filtering for the difference between target and number in array
  //if that's true we found it!

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
