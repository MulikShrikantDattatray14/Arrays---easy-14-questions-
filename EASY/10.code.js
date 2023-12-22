//Summation Approach:
// function missingNumber(a, N) {
//     // Summation of first N numbers:
//     const summation = (N * (N + 1)) / 2;

//     // Summation of all array elements:
//     let s2 = 0;
//     for (let i = 0; i < N - 1; i++) {
//       s2 += a[i];
//     }

//     const missingNum = summation - s2;
//     return missingNum;
//   }

//     const N = 5;
//     const a = [1, 2, 4, 5];
//     const ans = missingNumber(a, N);
//     console.log("The missing number is:", ans);

//////////////////////////////////////////////////////////////////////////////////////////////
//XOR Approach :
//if we perform the XOR of the numbers 1 to N with the XOR of the array elements, we will //be left with the missing number.
function missingNumber(a, N) {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < N - 1; i++) {
    xor2 = xor2 ^ a[i]; // XOR of array elements
    xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
  }
  xor1 = xor1 ^ N; // XOR up to [1...N]

  return xor1 ^ xor2; // the missing number
}
// note : XOR cancels the same elements i.e 5 ^ 5 =0
const N = 5;
const a = [1, 2, 4, 5];
const ans = missingNumber(a, N);
console.log("The missing number is:", ans);
