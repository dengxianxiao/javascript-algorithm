/**
 * 层次遍历二叉树
 *
 */
function TreeNode (val) {
  this.val = val
  this.left = null
  this.right = null
}

/**
 * 二叉树的层次遍历
 *
 * @param {c} root
 */
function levelTraversal (root) {
  if (!root) {
    return
  }
  let arr = [root]
  let arrValue = []
  while (arr.length) {
    let node = arr.pop()
    // 取值
    arrValue.push(node.val)
    if (node.left) {
      arr.unshift(node.left)
    }
    if (node.right) {
      arr.unshift(node.right)
    }
  }
  return arrValue
}

/**
 *
 *          1
 *        2   3
 *    4    5     6
 *       7  8
 *
 */
let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
let n4 = new TreeNode(4)
let n5 = new TreeNode(5)
let n6 = new TreeNode(6)
let n7 = new TreeNode(7)
let n8 = new TreeNode(8)

n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
n3.right = n6
n5.left = n7
n5.right = n8

console.log(levelTraversal(n1))
