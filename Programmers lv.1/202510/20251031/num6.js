// 6번 서울에서 김서방 찾기

function solution(seoul) {
  var answer = "";
  seoul.map((name, i) => {
    if (name === "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  });
  return answer;
}
