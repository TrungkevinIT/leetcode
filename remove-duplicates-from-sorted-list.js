function nodeList(val,next){
    this.val=(val==null?0:val)
    this.next=(next==null?null:next)
}
node1=new nodeList(1)
node2=new nodeList(1)
node3=new nodeList(1)
node4=new nodeList(1)
node5=new nodeList(2)
node6=new nodeList(3)
node7=new nodeList(3)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
node6.next=node7

head=node1
var deleteDuplicates = function(head) {
    ls=head
    if (head === null) {
        return head; // Trả về null
    }
    while(ls.next !=null){
        if(ls.val==ls.next.val){
            ls.next=ls.next.next
        }else{
        ls=ls.next
        }
    }
    return head;
};
console.log(deleteDuplicates(head))
deleteDuplicates(head)