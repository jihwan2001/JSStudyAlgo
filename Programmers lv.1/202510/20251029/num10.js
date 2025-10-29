// 10번 하샤드 수10번 하샤드 수10번 하샤드 수10번 하샤드 수10번 하샤드 수

function solution(x) {
  const arr = x.toString().split("").map(Number);
  let hap = 0;
  for (let i = 0; i < arr.length; i++) {
    hap += arr[i];
  }

  return x % hap === 0 ? true : false;
}
