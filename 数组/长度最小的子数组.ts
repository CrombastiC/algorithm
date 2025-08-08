//给定一个含有 n 个正整数的数组和一个正整数 s ，
// 找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，
// 并返回其长度。如果不存在符合条件的子数组，返回 0。
// 示例 1：暴力解法
const minSubArrayLen = (s: number, nums: number[]): number => {
  let result = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let subLength = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      subLength = j - i + 1;
      if (sum >= s) {
        result = Math.min(result, subLength);
        break; // 找到满足条件的子数组后，跳出内层循环
      }
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}

//实例2 滑动窗口
function minSubArrayLen2(target: number, nums: number[]): number {
  let left: number = 0,
    res: number = Infinity,
    subLen: number = 0,
    sum: number = 0;
  for (let right: number = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      subLen = right - left + 1;
      res = Math.min(res, subLen);
      sum -= nums[left];
      left++;
    }
  }
  return res === Infinity ? 0 : res;
}
// 以 target = 7，nums = [2,3,1,2,4,3] 为例，逐步分析执行步骤：
//1. right=0（元素 = 2）：
// sum = 0 + 2 = 2（小于 7，不进入 while）
//2. right=1（元素 = 3）：
// sum = 2 + 3 = 5（小于 7，不进入 while）
//3. right=2（元素 = 1）：
// sum = 5 + 1 = 6（小于 7，不进入 while）
//4. right=3（元素 = 2）：
// sum = 6 + 2 = 8（≥7，进入 while）
// subLen = 3-0+1=4 → res=4
// sum = 8-2=6（移除 nums [0]），left=1
// sum=6 <7，退出 while
//5. right=4（元素 = 4）：
// sum = 6 + 4 = 10（≥7，进入 while）
// subLen = 4-1+1=4 → res 保持 4
// sum = 10-3=7（移除 nums [1]），left=2
// subLen = 4-2+1=3 → res=3
// sum = 7-1=6（移除 nums [2]），left=3
// sum=6 <7，退出 while
//6. right=5（元素 = 3）：
// sum = 6 + 3 = 9（≥7，进入 while）
// subLen = 5-3+1=3 → res 保持 3
// sum = 9-2=7（移除 nums [3]），left=4
// subLen = 5-4+1=2 → res=2
// sum = 7-4=3（移除 nums [4]），left=5
// sum=3 <7，退出 while
