/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) return false

        const stack: [TreeNode, number][] = [[root, targetSum - root.val]]
        while(stack.length) {
            const item = stack.pop()
            
            const [node, curVal] = item

            if (!node.left && !node.right && curVal === 0) {
                return true
            }

            if (node.left) {
                stack.push([node.left, curVal - node.left.val])
            }

            if (node.right) {
                stack.push([node.right, curVal - node.right.val])
            }
        }

        return false

    }
}
