/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const findChampion = function (n, edges) {
  if (n <= 0) {
    return -1
  }

  const weak = new Array(n).fill(false)

  edges.forEach((relation) => {
    const [team, weakTeams] = relation
    weakTeams.forEach((weakTeam) => {
      weak[weakTeam] = true
    })
  })
  const champion = weak
    .map((isWeak, team) => ({ team, isWeak }))
    .filter((v) => !v.isWeak)
  if (champion.length === 1) {
    return champion[0].team
  }
  return -1
}
