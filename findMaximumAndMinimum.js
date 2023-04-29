function getMinMax(nums) {
    let max = nums[0];
    let min = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
        } 
        if(nums[i] < min) {
            min = nums[i];
        }
    }
    return [min, max];
}

let nums = [10, 25, 6, 7, 15, 38, 100, 26];
let [min, max] = getMinMax(nums);

console.log('Max - ' + max + ' : Min - ' + min);