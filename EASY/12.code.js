function getSingleElement(arr) {
  // XOR all the elements:
  let xorr = 0;
  for (let i = 0; i < arr.length; i++) {
    xorr = xorr ^ arr[i];
  }
  return xorr;
}

function main() {
  let arr = [4, 1, 2, 1, 2];
  let ans = getSingleElement(arr);
  console.log("The single element is:", ans);
}

main();
