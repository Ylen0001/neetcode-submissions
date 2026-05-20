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
        
        let right_depth = this.maxDepth(root.right);
        let left_depth = this.maxDepth(root.left);

        return Math.max(right_depth, left_depth) + 1;
    }
}
