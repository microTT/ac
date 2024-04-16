/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function findMid(left, right) {
  let mid = null
  let length = 0
  let index = 0
  function traversse(node) {
    if (!node) {
      return null
    }
    length++

    traversse(node === right ? null : node.next)
    index++
    if (index === Math.floor(length / 2) + 1) {
      mid = node
    }
  }
  traversse(left)
  return mid
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  if (!head) {
    return null
  }
  return buildTree(head, null)
}

function buildTree(left, right) {
  if (left === right) {
    return null
  }
  const mid = findMid(left, right)
  const node = new TreeNode(mid.val)
  node.left = buildTree(left, mid)
  node.right = buildTree(mid.next, right)
  return node
}
