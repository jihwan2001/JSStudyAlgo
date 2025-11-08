// 2번 게임 맵 최단거리(bfs)

function solution(maps) {
  var answer = 0;
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let q = [];
  q.push([0, 0]);

  while (q.length) {
    const [curX, curY] = q.shift(); // 선입선출 fifo

    for (let i = 0; i < dx.length; i++) {
      const nx = curX + dx[i]; // 다음 x
      const ny = curY + dy[i]; // 다음 y

      // 범위가 초과 되었는지 확인 만약, 초과되었으면 무시 후 진행
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (maps[nx][ny] !== 1) continue;

      maps[nx][ny] = maps[curX][curY] + 1;
      q.push([nx, ny]);
    }
  }
  return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
}
