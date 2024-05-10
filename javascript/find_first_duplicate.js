function findFirstDuplicate(arr) {
  // type your code here

  // Attempt #1
  /*
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return -1;
  */

  // Attempt #2
  const processed = []
  for (let n of arr) {
    console.log(`n = ${n}`)
    for (let e of processed) {
      if (n === e) {
        return n;
      }
    }
    processed.push(n)
  }
  return -1;

}

if (require.main === module) {
  // add your own tests in here
  /*
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
  */

  const a1 = [2,4,6,8,8,10];
  const a2 = [1,3,5,7,9];
  const a3 = [15,30,45,15,60,45];

  console.log("Test #1: ", a1);
  console.log("Expecting: 8\t=>\t", findFirstDuplicate(a1));

  console.log("Test #2: ", a2);
  console.log("Expecting: -1\t=>\t", findFirstDuplicate(a2));

  console.log("Test #3: ", a3);
  console.log("Expecting: 15\t=>\t", findFirstDuplicate(a3));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

// 1. Find the first duplicate element that exists in an array.
// 2. Understood.
// 3. [2,4,6,8,8,10] => 8
//    [1,3,5,7,9] => -1
//    [15, 30, 15, 45, 60, 45] => 15

// 4.
/**
 * function findFirstDuplicate(arr) {
 *    for n in arr {
 *      for e in arr(1,len) {
 *        if (n === e) {
 *          return n
 *        }
 *      }
 *    }
 *    return -1;
 * }
 */
// 5. Code above.