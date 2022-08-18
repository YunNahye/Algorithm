var letterCombinations = function(digits) {
  if(digits === '') return [];
  
  const letters = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  
  const result = [];
  const dfs = (s, n) => {
    if(n === '') result.push(s);
    else {
      const idx = n.substr(0, 1);
      n = n.substr(1);
      
      [...letters[parseInt(idx)]].forEach((c) => {
        dfs(s + c, n);
      });
    }
  };
  
  dfs('', digits);
  return result;
};