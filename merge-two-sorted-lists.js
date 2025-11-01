//tạo ra một node rỗng
function ListNode(val,next){
    this.val=(val===undefined?0:val);
    this.next=(next===undefined?null:next);
}
node1=new ListNode(1);
node2=new ListNode(2);
node3=new ListNode(4);
node1.next=node2;
node2.next=node3;
list1=node1;
console.log(list1)
node4=new ListNode(1);
node5=new ListNode(2);
node6=new ListNode(3);
node4.next=node5;
node5.next=node6;
list2=node4;
console.log(list2)
var mergeTwoLists = function(list1, list2){
    merge=new ListNode();
    tailcurrent=merge;
    while(list1!=null && list2!=null){
        if(list1.val<=list2.val){
            tailcurrent.next=list1;
            list1=list1.next;
        }else{
            tailcurrent.next=list2;
            list2=list2.next;
        }
        tailcurrent=tailcurrent.next;
    }
    if(list1!=null){
        tailcurrent.next=list1;
    }else{
        tailcurrent.next=list2;
    }
    return merge.next;
}
var a=mergeTwoLists(list1,list2);
while(a!=null){
    console.log(a.val);
    a=a.next;
}
