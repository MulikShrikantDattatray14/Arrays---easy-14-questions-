function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
const num = 4;
const val = search(arr, num);

console.log(val);
