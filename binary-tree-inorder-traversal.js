function TreeNode(val,left,right){
    this.val=(val==null?0:val)
    this.left=(left==null?null:left)
    this.right=(right==null?null:right)
}
node3=new TreeNode(3)
node2=new TreeNode(2,node3,null)
root=new TreeNode(1,null,node2)

var inorderTraversal = function(root) {
    const result=[]
    const dft=(node)=>{
        if(node==null){
            return ;
        }
        dft(node.left)
        result.push(node.val)
        dft(node.right)
    }
    dft(root)
    return result
};