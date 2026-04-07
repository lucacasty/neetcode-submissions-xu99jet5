class Solution {
    canFinish(numCourses, prerequisites) {
        // costruisco la adjacency list
        const graph = Array.from({length: numCourses}, () => []);
        for (const [course, pre] of prerequisites) {
            graph[course].push(pre);
        }

        const visited = new Array(numCourses).fill(0); 
        // 0 = non visitato, 1 = visiting, 2 = visitato

        const dfs = (course) => {
            if (visited[course] === 1) return false; // ciclo
            if (visited[course] === 2) return true;  // già controllato

            visited[course] = 1; // segno come visiting

            for (const pre of graph[course]) {
                if (!dfs(pre)) return false;
            }

            visited[course] = 2; // segno come visitato
            return true;
        }

        for (let i = 0; i < numCourses; i++) {
            if (!dfs(i)) return false;
        }

        return true;
    }
}