function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const node = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
)

function findBackNWithTrave(node, index) {
  let nodeIndexFromBack = 0
  let findedNode = null

  function traveList(current) {
    if (current === null) {
      return
    }
    traveList(current.next)
    nodeIndexFromBack = nodeIndexFromBack + 1
    if (nodeIndexFromBack === index) {
      findedNode = current
    }
    return
  }

  traveList(node)

  return findedNode
}

console.log(findBackNWithTrave(node, 1))

function findBackNWithItroter(node, index) {
  // n-(n-k) = kF
  let itorFront = node
  let itorBack = node

  for (let i = 1; itorFront.next; i++) {
    if (i >= index) {
      itorBack = itorBack.next
    }
    itorFront = itorFront.next
  }

  return itorBack
}

console.log(findBackNWithItroter(node, 1))
