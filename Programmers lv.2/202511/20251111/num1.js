// 1번 모의고사1번 모의고사

function solution(answers) {
  var answer = [];
  let fScore = 0;
  let sScore = 0;
  let tScore = 0;

  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, index) => {
    if (answer === first[index % first.length]) fScore++;
    if (answer === second[index % second.length]) sScore++;
    if (answer === third[index % third.length]) tScore++;
  });
  const maxScore = Math.max(fScore, sScore, tScore);
  if (maxScore === fScore) answer.push(1);
  if (maxScore === sScore) answer.push(2);
  if (maxScore === tScore) answer.push(3);
  return answer;
}
