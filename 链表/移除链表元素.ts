// 删除链表中等于给定值 val 的所有节点。

//版本1 在原链表上直接删除
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function removeElement(head: ListNode | null, val: number): ListNode | null {
    // 删除头部节点
    while (head !== null && head.val === val) {
        head = head.next;
    }
    if (head === null) return head;
    let pre: ListNode = head, cur: ListNode | null = head.next;
    // 删除非头部节点
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next;
        } else {
            //此处不加类型断言时：编译器会认为pre类型为ListNode, pre.next类型为ListNode | null
            pre = pre.next as ListNode;
        }
        cur = cur.next;
    }
    return head;
};
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
//版本2 虚拟头节点
function removeElements(head: ListNode | null, val: number): ListNode | null {
    // 添加虚拟节点
    const data = new ListNode(0, head);
    let pre = data, cur = data.next;
    while (cur) {
        if (cur.val === val) {
            pre.next = cur.next
        } else {
            pre = cur;
        }
        cur = cur.next;
    }
    return data.next;
};
