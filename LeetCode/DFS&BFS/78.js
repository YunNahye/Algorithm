var subsets = function(nums) {
  const result = [];
  
  const dfs = (arr, rest) => {
    result.push(arr);
    
    while(rest.length) {
      dfs([...arr, rest.shift()], [...rest]);
    }
  };
  
  dfs([], nums);
  
  return result;
};