function addItem(item, arr) {
    arr.push(item);
    return item;
}

function removeItem(arr) {
    return arr.shift();
}

function peekItem(arr) {
    return arr[0];
}

let nums = [1,2,3,4,5];

console.log('Current Array: ' + JSON.stringify(nums));
console.log('Adding an item ' + addItem(6, nums))
console.log('Updated Array after adding item ' + JSON.stringify(nums));
console.log('Removing an item ' + removeItem(nums));
console.log('Updated Array after removing item ' + JSON.stringify(nums));
console.log('Topmost item - ' + peekItem(nums));