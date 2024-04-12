/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  const dp = []
  function traverse(leftNum, choice) {
    if (leftNum === 0) {
      return 1
    }

    if (dp[leftNum]) {
      return dp[leftNum]
    }

    for (let i = 0; i < choice.length; i++) {
      if (leftNum < choice[i]) {
        continue
      }
      dp[leftNum] = (dp[leftNum] || 0) + traverse(leftNum - choice[i], choice)
    }

    return dp[leftNum] || 0
  }
  return traverse(target, nums)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4R = function (nums, target) {
  const dp = [1]

  for (let i = 0; i <= target; i++) {
    nums.forEach((num) => {
      dp[i] = (dp[i] || 0) + (dp[i - num] || 0)
    })
  }
  return dp[target] || 0
}

console.log(
  combinationSum4R([1, 2, 3], 4),
  combinationSum4R(
    [
      10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160,
      170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310,
      320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460,
      470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610,
      620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760,
      770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890, 900, 910,
      920, 930, 940, 950, 960, 970, 980, 990, 111,
    ],
    999
  )
)
