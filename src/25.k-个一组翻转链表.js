/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
  if (!head) {
    return head
  }

  let newHead = null
  let currentReserveHead = null

  //  1, 2, 3, 4, 5, 6, 7, 8 =>  3, 2, 1, 6, 5, 4, 7, 8
  function traverse(node, index) {
    // 遍历到最后一个就开始返回。
    if (!node) {
      return null
    }
    // 这一行放哪都可以， 放后序位置也行，因为反转，第一个k那一组的最后一个节点，最后一定是新的头结点，如果用dummy节点 dummy.next = head 可以想象来这行代码可以省略，因为保证 dummy 永远是头结点，
    if (index === k) {
      newHead = node
    }

    // 从下面的 return node可以看到，拿到的是每个节点的next节点，例如遍历5的时候，拿到的是6，遍历4的时候，拿到的是3，其实这里不要返回值也可以，因为可以从 node.next 拿到下一个节点。
    //  递归函数，已经帮我们把当前node.next以及节点之后的都已经处理好了。例如我们现在在遍历 4这个节点，我们认为 5,6,7,8节点已经处理成我们需要的样子了。
    const tail = traverse(node.next, index + 1)

    //  只以具体的一个节点看，要做的事情事情如下

    // 如果这个节点是正好k组的最后一个节点，例如，节点3
    if (index % k === 0) {
      //  当前这一组开始处理反转，这一组把后面已经处理好的节点直接拼接上来。
      node.next = currentReserveHead || tail

      //  这个节点是这一组的头结点
      currentReserveHead = node

      // 如果这个节点是当前k组的中间节点，那么把当前节点，插入到他的next的后面，  也就是 把原来的  node -> node.next  变化为   node.next -> node，
      //  同时保证 node.next 的链条不变，所以就是 先把  node.next.next 复制给  node.next， 然后把node.next.next = node
      //  最终实现的效果就是把当前node节点，孤零零的插入到当前节点后面的的后面
    } else if (index % k !== 0 && currentReserveHead) {
      node.next = tail.next
      tail.next = node
    }

    //  最终变化效果就是  5-> 6,7,8         6 ↘           6,5 ↘
    //                             3 -> 4-> 5,7,8    2,3 -> 4,7,8        2, 3 -> 6, 5, 4, 7, 8 (这一步看第49行)

    return node
  }

  //  因为要和k去作对比，所以index从1开始，而不是从0。 例如k = 3, index 是1, 2, 3 ，这样取余的时候方便
  traverse(head, 1)
  return newHead
}
// @lc code=end
