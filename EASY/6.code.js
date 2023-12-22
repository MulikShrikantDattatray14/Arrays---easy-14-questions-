function reverse(arr, start, end) {
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateElementsToRight(arr, n, k) {
  // Reverse first n-k elements
  reverse(arr, 0, n - k - 1);
  // Reverse last k elements
  reverse(arr, n - k, n - 1);
  // Reverse whole array
  reverse(arr, 0, n - 1);
}

function rotateElementsToLeft(arr, n, k) {
    // Reverse first k elements
    reverse(arr, 0,  k-1 );
    // Reverse last n-k elements
    reverse(arr,  k, n - 1);
    // Reverse whole array
    reverse(arr, 0, n - 1);
  }

const arr = [1, 2, 3, 4, 5, 6, 7];
const n = 7;
const k = 2;

//rotateElementsToRight(arr, n, k);
rotateElementsToLeft(arr, n, k);

console.log("After Rotating the k elements to right ", arr.join(" "));
