/**
 * 前序遍历二叉树
 * 根左右
 */
function TreeNode (val) {
  this.val = val
  this.left = null
  this.right = null
}
/**
 * 递归 前序遍历：1  2  4  5  7  8  3  6
 */
function preorderTraversal1 (node, arr = []) {
  if (node) {
    arr.push(node.val)
    preorderTraversal1(node.left, arr)
    preorderTraversal1(node.right, arr)
  }
  return arr
}

/**
 * 迭代 前序遍历：1  2  4  5  7  8  3  6
 */
function preorderTraversal2 (root) {
  let arrNode = []
  let arrValue = []
  let tmpNode = root // 操作tmpNode, 留着node指向根节点
  while (tmpNode || arrNode.length) {
    if (tmpNode) {
      arrValue.push(tmpNode.val)
      arrNode.push(tmpNode)
      tmpNode = tmpNode.left
    } else {
      let node = arrNode.pop()
      tmpNode = node.right
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

console.log(preorderTraversal2(n1))
