
// console.log(fibs(2));
// console.log(fibs(3));
// console.log(fibs(4));
// console.log(fibs(80));

// function fibs(num) {
//     let arr = [];
//     for(let i = 0; i < num; i++) {
//         if (i < 2){
//             arr.push(i)
//         } else {
//             arr.push(arr[i-1] + arr[i-2])
//         }
//     }
//     return arr;
// }

function fibsRec(num) {
    if (num <= 2) {
        return [0, 1];        
    } else {
        let prev = fibsRec(num - 1);
        let nextNum = prev[prev.length - 1] + prev[prev.length - 2];
        prev.push(nextNum);
        return prev;
    }
}

console.log(fibsRec(8));