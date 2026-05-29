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
     * @return {number}
     */
    maxDepth(root) {

        if(!root)
            return 0;

        let left_depths = this.maxDepth(root.left);
        let right_depths = this.maxDepth(root.right);

        return Math.max(left_depths, right_depths) + 1;

    }
}
