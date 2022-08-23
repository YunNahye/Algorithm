var combinationSum = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  
  const dfs = (comb, arr, sum) => {
    if(sum > target) return;
    else if(sum === target) {
      result.push(comb);
      return;
    }
    else {
      while(arr.length) {
        dfs([...comb, arr[0]], [...arr], sum+arr[0]);
        arr.shift();
      }
    }
  };
  
  dfs([], candidates, 0);
  return result;
};
//77번과 같은 풀이