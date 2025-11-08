function TreeNode(val,left,right){
    this.val=(val==null?0:val)
    this.left=(left==null?null:left)
    this.right=(right==null?null:right)
}
node1=new TreeNode(3)
node2=new TreeNode(2)
node3=new TreeNode(3)
node4=new TreeNode(2)
p=new TreeNode(1,2,3)
q=new TreeNode(1,2,3)
var isSameTree = function(p, q) {   
    if(p==null && q==null){
        return true;
    }
    if (p === null || q === null || p.val !== q.val) {
        return false;
    }
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};