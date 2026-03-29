class Solution {
    islandsAndTreasure(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        let queue = [];

        // 1. Aggiungiamo tutti i tesori alla coda iniziale
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                }
            }
        }

        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        // 2. BFS multi-sorgente
        while (queue.length > 0) {
            let [r, c] = queue.shift();

            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;

                // Se la cella è nei limiti ed è "vuota" (2147483647)
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 2147483647) {
                    grid[nr][nc] = grid[r][c] + 1;
                    queue.push([nr, nc]);
                }
            }
        }
        return grid;
    }
}