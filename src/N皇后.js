

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
  let playground = new Array(n).fill(null).map(v => new Array(n).fill('.'));
  const result = backtrack(playground, [], []);
  return result.sort().reverse();
};

function backtrack(playground, trackList, result) {
  if (trackList.length === playground.length) {
    result.push(trackList.map(v => v.join('')));
    return;
  }
  const currentRow = trackList.length;
  let current = playground[currentRow];
  for (let col = 0; col < current.length; col++) {
    if (!isValidPosition(playground, currentRow, col)) {
      continue;
    }
    trackList.push(playground[currentRow]);
    current[col] = 'Q';
    backtrack(playground, trackList, result);
    trackList.pop();
    playground[currentRow][col] = '.';
  }

  return result;
}

function isValidPosition(playground, row, col) {
  //  左上
  for(let i=0, j =0; row - i >= 0 && col - j >= 0; i++, j++) {
    if (playground[row-i][col-j] === 'Q') {
      return false;
    }
  }

  for(let i=0, j =0; row - i >= 0 && col + j < playground[row].length; i++, j++) {
    if (playground[row-i][col+j] === 'Q') {
      return false;
    }
  }
  

  //  右上
  if (col < playground[row].length && row > 0 && playground[row - 1][col + 1] === 'Q') {
    return false;
  }

  //  上面一列
  for(let i = 0; i < row; i++) {
    if (playground[i][col] === 'Q') {
      return false
    }
  }
  return true;
}

console.log(solveNQueens(5))
