// 5번 문자열 내 마음대로 정렬하기

function solution(strings, n) {
  return strings.sort((a, b) => {
    const charA = a[n];
    const charB = b[n];
    if (charA > charB) return 1;
    if (charA < charB) return -1;

    if (a > b) return 1;
    if (a < b) return -1;
  });
}
