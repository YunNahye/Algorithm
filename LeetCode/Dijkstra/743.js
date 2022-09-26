var networkDelayTime = function(times, n, k) {
  const hash = {};
  
  times.forEach(([a, b, c]) => {
    if(a in hash) hash[a][b] = c;
    else {
      hash[a] = Object();
      hash[a][b] = c;
    }
  });
  
  const graph = [];
  
  for(let i = 1; i < n + 1; i++) {
    const line = [];
    for(let j = 1; j < n + 1; j++) {
      if(i === j) line.push(0);
      else if(i in hash && j in hash[i]) line.push(hash[i][j]);
      else line.push(Infinity);
    }
    graph.push(line);
  }
  
  const visited = Array(n).fill(false);
  const cost = [];
  
  const getSmallest = () => { //heap으로 구현하면 시간복잡도 줄일 수 있음
    let min = Infinity;
    let minIdx = 0;
    for(let i = 0; i < cost.length; i++) {
      if(!visited[i] && cost[i] < min) {
        minIdx = i;
        min = cost[i];
      }
    }
    return minIdx;
  };
  
  const dijkstra = (k) => {
    graph[k-1].forEach(t => cost.push(t));
    visited[k-1] = true;
    
    for(let i = 0; i < n - 2; i++) {
      let curr = getSmallest();
      visited[curr] = true;
      for(let j = 0; j < n; j++) {
        if(!visited[j] && cost[curr] + graph[curr][j] < cost[j]) cost[j] = cost[curr] + graph[curr][j];
      }
    }
  };
  dijkstra(k);
  
  return Math.max(...cost) === Infinity ? -1 : Math.max(...cost);
};
//DFS로도 풀어보기