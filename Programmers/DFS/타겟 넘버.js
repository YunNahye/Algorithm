function solution(numbers, target) {
  var answer = 0;
  
  const dfs = (lst, n) => {
    if(lst.length === 0) n === target && answer++;
    else {
      const k = lst.pop();
      dfs([...lst], n + k);
      dfs([...lst], n - k);
    }
  };
  
  dfs(numbers, 0);
  
  return answer;
}