// 1. 네트워크

function solution(n, computers) {
  const visited = Array(n).fill(false);
  let networkCount = 0;

  const dfs = (i) => {
    console.log(`🖥️ DFS(${i}) 시작`);
    for (let j = 0; j < n; j++) {
      // i번과 j번이 연결돼 있고, 아직 j를 방문하지 않았다면
      if (computers[i][j] === 1 && !visited[j]) {
        visited[j] = true;
        console.log(`➡️ ${i}번 → ${j}번 이동 (연결 확인)`);
        dfs(j); // j로 이동해서 다시 탐색
      }
    }
    console.log(`🔙 DFS(${i}) 종료`);
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      networkCount++;
      console.log(`\n🌐 새 네트워크 발견! 시작 노드: ${i}`);
      visited[i] = true;
      dfs(i);
      console.log(`✅ 네트워크 ${networkCount}개 탐색 완료`);
    }
  }

  console.log("\n최종 visited 상태:", visited);
  console.log("총 네트워크 개수:", networkCount);
  return networkCount;
}
