var permute = function(nums) {
  const result = [];
  
  const dfs = (per, numList) => {
    if(per.length === numList.length) result.push(per);
    else {
      numList.forEach((n) => {
        if(!(per.includes(n))) {
          dfs([...per, n], numList);
        }
      })
    }
  };
  
  dfs([], nums);
  return result;
};