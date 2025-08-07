// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 
// target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

const findTarget = (nums: number[], target: number): number => {
  let mid: number, left: number = 0, right: number = nums.length - 1;
  while (left <= right) {
    // 使用位运算来计算中间索引，避免溢出
    mid = left + ((right - left) >> 1);
    // mid = Math.floor((left + right) / 2); // 也可以使用普通除法，但可能会溢出
    // mid = left + Math.floor((right - left) / 2); // 另一种安全的计算方式
    if (nums[mid] === target) {
      return mid;
      // 找到目标值，返回其索引
    } else if (nums[mid] < target) {
      // 如果中间值小于目标值，说明目标值在右半部分
      left = mid + 1;
    } else {
      // 如果中间值大于目标值，说明目标值在左半部分
      right = mid - 1;
    }
  }
  return -1;
}

findTarget([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 返回 5
// left 0 
// right 9
// mid 4
// nums[mid] 5 < target 6
// left 5
// right 9
// mid 7
// nums[mid] 8 > target 6
// left 5
// right 6
// mid 5
// nums[mid] 6 === target 6
// 返回 5
