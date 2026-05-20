class Solution{
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    twoSum(nums, target) {
        let i = 0; let j = 1;
        console.log("Hiii")
        while(i < nums.length)
        {
            if(nums[i] + nums[j] === target)
                return [i, j];
            while(j < nums.length)
            {
                if(nums[i] + nums[j] === target)
                {
                    return [i, j];
                }
                j++;
                console.log(j);
            }
            i++;
            j = i + 1;
        }
    }
}
