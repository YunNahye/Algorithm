function solution(maps) {
  const [m, n] = [maps[0].length - 1, maps.length - 1]; //도착 지점 좌표(가장 끝 지점)

  const START = [0, 0];
  const DIRECTION = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  const bfs = (x, y) => {
      const queue = [[x, y]];

      while(queue.length) {
          let now = queue.shift();

          for(let [dx, dy] of DIRECTION) {
              const nx = now[0] + dx; //다음 탐색 지점 x좌표
              const ny = now[1] + dy; //다음 탐색 지점 y좌표
              if(0 > nx || nx > m || 0 > ny || ny > n) continue; //다음 탐색 지점이 맵 밖일 경우 컨티뉴
              if(maps[ny][nx] === 0) continue; //다음 탐색 지점이 벽일 경우 컨티뉴
              if(maps[ny][nx] === 1) {
                  maps[ny][nx] = maps[now[1]][now[0]] + 1; //지나온 칸 개수를 저장
                  queue.push([nx, ny]);
              }
          }
      }

      return maps[n][m] === 1 ? -1 : maps[n][m]; //도착 지점 값이 1일 경우 도달하지 못한 것이므로 -1 반환
  };

  return bfs(START[0], START[1]);
}