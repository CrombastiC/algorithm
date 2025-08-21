// class ListNode{
//   public val:number;
//   public next:ListNode | null=null;

//   constructor(value:number){
//     this.val=value;
//     this.next=null;
//   }
// }
//链表的删除其实就是更改连接
//链表的插入也是更改连接
//链表在内存中并非连续分布，而是通过指针域的指针链接在内存中各个节点
//链表适合频繁插入和删除并且查询较少的场景
//链表的查询时间复杂度是O(n)，而数组是O(1)
