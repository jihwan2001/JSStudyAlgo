// 2번 [1차] 비밀지도

function solution(n, arr1, arr2) {
  const arr11 = [];
  const arr22 = [];
  const answer = [];
  arr1.forEach((num) => {
    const change = num.toString(2);
    arr11.push(change.padStart(n, "0"));
  });
  arr2.forEach((num) => {
    const change = num.toString(2);
    arr22.push(change.padStart(n, "0"));
  });
  for (let i = 0; i < n; i++) {
    let number = "";
    for (let j = 0; j < n; j++) {
      if (arr11[i][j] === "0" && arr22[i][j] === "0") {
        number += "0";
      } else {
        number += "1";
      }
    }
    answer.push(number);
  }
  return answer.map((n, i) => {
    return n.replaceAll("1", "#").replaceAll("0", " ");
  });
}

// 2.
function solution(n, arr1, arr2) {
  return arr1.map((num, i) =>
    (num | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replaceAll("1", "#")
      .replaceAll("0", " ")
  );
}
