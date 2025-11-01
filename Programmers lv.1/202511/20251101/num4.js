// 4번 약수의 개수와 덧셈

// 1.

function solution(left, right) {
  let numArr = [];
  let hapArr = [];
  let hap = 0; // 약수의 개수
  for (let i = left; i <= right; i++) {
    numArr.push(i);
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        hapArr.push(j);
      }
    }
  }
  const hapArrResult = []; // 약수의 배열
  let current = [];
  for (let i = 0; i < hapArr.length; i++) {
    if (hapArr[i] === 1 && current.length > 0) {
      hapArrResult.push(current);
      current = [1];
    } else {
      current.push(hapArr[i]);
    }
  }
  if (current.length > 0) hapArrResult.push(current);

  const hapArrLengthArr = hapArrResult.map((group) => group.length);
  const lastArr = hapArrLengthArr.map((n) => (n % 2 === 0 ? 1 : -1));

  const result = numArr.reduce((sum, num, i) => sum + num * lastArr[i], 0);
  console.log(numArr, hapArrLengthArr);
  return result;
}

// 2.
function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    const isInt = Number.isInteger(Math.sqrt(i));
    result += isInt ? -i : i;
  }
  return result;
}
