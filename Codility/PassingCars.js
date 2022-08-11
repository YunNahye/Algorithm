function solution(A) {
  let result = 0;
  let countEast = 0;

  A.forEach((d) => {
    if(d === 0) countEast++;
    else result += countEast;
  });

  if(result > 1000000000) return -1;
  return result;
}
//forEach문을 for문으로 바꾸어 result가 1,000,000,000을 넘어가는 순간 -1을 리턴하도록 구현할 수도 있다.