/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function (board) {
  let answered = false

  const CELL_SIZE = 9
  const CELL_NUMS = new Array(CELL_SIZE).fill(1).map((v, i) => String(v + i))

  const rowCheck = []
  const colCheck = []
  const gridCheck = []
  const waitingCellList = []

  function pushNumsInCheck(rowIndex, colIndex, num) {
    const gridRowIndex = Math.floor(rowIndex / 3)
    const gridColIndex = Math.floor(colIndex / 3)

    rowCheck[rowIndex] ||= {}
    colCheck[colIndex] ||= {}
    gridCheck[gridRowIndex] ||= []
    gridCheck[gridRowIndex][gridColIndex] ||= {}

    rowCheck[rowIndex][num] = (rowCheck[rowIndex][num] || 0) + 1
    colCheck[colIndex][num] = (colCheck[colIndex][num] || 0) + 1
    gridCheck[gridRowIndex][gridColIndex][num] =
      (gridCheck[gridRowIndex][gridColIndex][num] || 0) + 1
  }

  function removeNumsInCheck(rowIndex, colIndex, num) {
    const gridRowIndex = Math.floor(rowIndex / 3)
    const gridColIndex = Math.floor(colIndex / 3)

    rowCheck[rowIndex] ||= {}
    colCheck[colIndex] ||= {}
    gridCheck[gridRowIndex] ||= []
    gridCheck[gridRowIndex][gridColIndex] ||= {}

    rowCheck[rowIndex][num] -= 1
    colCheck[colIndex][num] -= 1
    gridCheck[gridRowIndex][gridColIndex][num] -= 1
  }

  function getAvaliableNums(rowIndex, colIndex) {
    const gridRowIndex = Math.floor(rowIndex / 3)
    const gridColIndex = Math.floor(colIndex / 3)

    rowCheck[rowIndex] ||= {}
    colCheck[colIndex] ||= {}
    gridCheck[gridRowIndex] ||= []
    gridCheck[gridRowIndex][gridColIndex] ||= {}

    return CELL_NUMS.filter(
      (num) =>
        !rowCheck[rowIndex][num] &&
        !colCheck[colIndex][num] &&
        !gridCheck[gridRowIndex][gridColIndex][num]
    )
  }

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const currentRow = board[rowIndex]
    for (let colIndex = 0; colIndex < currentRow.length; colIndex++) {
      const currentCell = currentRow[colIndex]
      if (currentCell !== '.') {
        pushNumsInCheck(rowIndex, colIndex, currentCell)
      } else {
        waitingCellList.push([rowIndex, colIndex])
      }
    }
  }

  function treeback(board, index) {
    if (index === waitingCellList.length) {
      answered = true
      return
    }
    if (answered) {
      return
    }
    const [rowIndex, colIndex] = waitingCellList[index]

    const nums = getAvaliableNums(rowIndex, colIndex)
    if (!nums.length) {
      return
    }
    for (let numIndex = 0; numIndex < nums.length; numIndex++) {
      const num = nums[numIndex]
      board[rowIndex][colIndex] = num
      pushNumsInCheck(rowIndex, colIndex, num)
      treeback(board, index + 1)
      if (answered) {
        return
      }
      board[rowIndex][colIndex] = '.'
      removeNumsInCheck(rowIndex, colIndex, num)
    }
  }

  treeback(board, 0)
  // console.log(board)
}
// @lc code=end

// console.log(
//   solveSudoku([
//     ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
//     ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
//     ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
//     ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
//     ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
//     ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
//     ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
//   ])
// )
