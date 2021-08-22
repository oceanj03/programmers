function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) == -1) answer.push(sum);
    }
  }

  return answer.sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);
