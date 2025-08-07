// 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素
// ，且元素按顺时针顺序螺旋排列的正方形矩阵。
// 示例:
// 输入: 3 输出: [ [ 1, 2, 3 ], 
//                [ 8, 9, 4 ],
//                [ 7, 6, 5 ] ]

const generateMatrix = (n: number): number[][] => {
  let loopNum: number = Math.floor(n / 2); // 断点1：可以在这里查看循环次数
  const resArr: number[][] = new Array(n).fill(1).map(i => new Array(n))
  let chunkNum: number = n - 1;
  let startX: number = 0;
  let startY: number = 0;
  let value: number = 1; // 断点2：可以在这里查看初始值
  let x: number, y: number;
  while (loopNum--) { // 断点3：每次循环开始时可以查看状态
    x = startX;
    y = startY;
    while (x < startX + chunkNum) {
      resArr[y][x] = value;
      x++;
      value++;
    }
    while (y < startX + chunkNum) {
      resArr[y][x] = value;
      y++;
      value++;
    }
    while (x > startX) {
      resArr[y][x] = value;
      x--;
      value++;
    }
    while (y > startY) {
      resArr[y][x] = value;
      y--;
      value++;
    }
    startX++;
    startY++;
    chunkNum -= 2;
  }
  if (n % 2 === 1) {
    resArr[startX][startY] = value;
  }
  return resArr
}

const result = generateMatrix(3); // 返回 [[1,2,3],[8,9,4],[7,6,5]]
console.log('螺旋矩阵结果:', result);
