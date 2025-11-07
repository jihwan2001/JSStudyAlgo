// 1번 추억 점수

function solution(name, yearning, photo) {
  let answer = [];
  let map = new Map(name.map((n, i) => [n, yearning[i]]));
  photo.forEach((ch) => {
    let hap = 0;
    [...ch].forEach((n) => {
      if (map.has(n)) {
        hap += map.get(n);
      }
    });
    answer.push(hap);
  });
  return answer;
}
