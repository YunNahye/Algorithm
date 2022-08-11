var topKFrequent = function(nums, k) {
  const frequency = {};
  
  nums.forEach((n) => {
    if(n in frequency) frequency[n] += 1;
    else frequency[n] = 1;
  });
  
  const frequencySort = [];
  for(num in frequency) frequencySort.push([num, frequency[num]]);
  frequencySort.sort(function(a, b) {
    return a[1] - b[1];
  });
  const result = [];
  
  for(let i=0; i<k; i++) result.push(frequencySort.pop()[0]);
  
  return result;
};
//객체의 정렬 방법에 대해 좀 더 알아봐야 겠다.