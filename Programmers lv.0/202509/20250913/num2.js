// 2번 최빈값 구하기

const solution = (arr) => {
  const map = new Map();
  // 1. 각 번호의 등장 횟수 구하기
  for (let i = 0; i < arr.length; i++) {
    // true면 (값이 존재하면 +1)
    if (map.has(arr[i])) {
      let v = map.get(arr[i]) + 1;
      map.delete(arr[i]);
      map.set(arr[i], v);
    }
    // false면 (값이 존재하지 않으면 1로 저장)
    else {
      map.set(arr[i], 1);
    }
  }

  // map.get() 을 이용해 가장 큰 수 구하기
  let max = 0;
  let result = 0;
  let count = 0;
  for (let [key, value] of map) {
    if (max < value) {
      max = value;
      result = key;
      count = 1;
    } else if (max === value) {
      count++;
    }
  }
  return count > 1 ? -1 : result;
};
