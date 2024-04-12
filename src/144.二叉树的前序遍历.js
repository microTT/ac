const preorderTraversal = function (root) {
  if (!root) {
    return []
  }

  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right),
  ]
}
