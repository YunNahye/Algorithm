var combine = function(n, k) {
  const result = [];
  const nums = [];
  
  for(let i=1; i<n+1; i++) nums.push(i);
  
  const dfs = (comb, arr) => {
    if(comb.length === k) result.push(comb);
    else if(arr.length === 0) return;
    
    else {
      while(arr.length) {
        dfs([...comb, arr.shift()], [...arr]);
      }
    }
  };
  
  dfs([], nums);
  
  return result;
};
//통과는 했지만 느리다. 메모리 사용도 크다.