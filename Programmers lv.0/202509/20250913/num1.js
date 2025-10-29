// 1번 중앙값 구하기

const solution = (arr) => {
  let newArr = arr.sort((a, b) => a - b);
  let midNum = Math.floor(newArr.length / 2);
  return newArr[midNum];
};
