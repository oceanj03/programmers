function solution(answers) {
  var answer = [];
  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let a1 = answers.filter((a, i) => a === s1[i % 5]).length;

  let a2 = answers.filter((a, i) => a === s2[i % 8]).length;
  let a3 = answers.filter((a, i) => a === s3[i % 10]).length;

  let max = Math.max(a1, a2, a3);

  if (max === a1) answer.push(1);
  if (max === a2) answer.push(2);
  if (max === a3) answer.push(3);

  return answer;
}
