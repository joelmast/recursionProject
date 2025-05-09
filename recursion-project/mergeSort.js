

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        let sortedLeft = mergeSort(left);
        let sortedRight = mergeSort(right);
        return merge(sortedLeft, sortedRight);
    }    
}

function merge(leftHalf, rightHalf) {
    let i = 0;
    let j = 0;
    let mergedArray = [];
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] < rightHalf[j]) {
            mergedArray.push(leftHalf[i]);
            i++;
        } else {
            mergedArray.push(rightHalf[j]);
            j++;
        }
    }
    // Add remaining elements from leftHalf or rightHalf
    mergedArray.push(...leftHalf.slice(i));
    mergedArray.push(...rightHalf.slice(j));
    return mergedArray;
}


console.log(mergeSort([105, 79, 100, 110]));

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
