function soupServings(n) {

  if (n >= 15000) {
    return 1;
  }
  let soupA = n;
  let soupB = n;
  const divideList = [
    [100, 0],
    [75, 25],
    [50, 50],
    [25, 75]
  ]

  let memo = [];

  function treeback([soupALeft, soupBLeft], chooses, weight) {
    if (soupALeft <= 0 && soupBLeft <= 0) {
      return weight / 2;
    } else if (soupALeft <= 0) {
      return weight;
    } else if (soupBLeft <= 0) {
      return 0;
    }

    const current = [soupALeft, soupBLeft].join(',');

    if (memo[current]) {
      return memo[current];
    }

    const result = chooses.reduce((acc, [divideA, divideB]) => {
      return acc + treeback([soupALeft - divideA, soupBLeft - divideB], chooses, weight * 0.25)
    }, 0);

    memo[current] = result;
    return result;
  }

  return treeback([soupA, soupB], divideList, 1)
}

console.log(soupServings(15000));