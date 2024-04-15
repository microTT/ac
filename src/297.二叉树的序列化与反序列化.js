/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
  if (!root) {
    return ''
  }
  const spareteChar = '_'
  const EMPTY = 'NULL'
  const queue = [root]
  const result = []
  while (queue.length) {
    const current = queue.shift()
    if (current) {
      queue.push(current.left)
      queue.push(current.right)
      result.push(current.val)
    } else {
      result.push(EMPTY)
    }
  }
  return result.join(spareteChar)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
  if (!data) {
    return null
  }
  const spareteChar = '_'
  const EMPTY = 'NULL'
  const list = data.split(spareteChar)
  const root = new TreeNode(list[0])
  const queue = [root]
  let i = 1
  while (queue.length) {
    const current = queue.shift()
    current.left = list[i] === EMPTY ? null : new TreeNode(list[i])
    i++
    current.right = list[i] === EMPTY ? null : new TreeNode(list[i])
    i++
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
