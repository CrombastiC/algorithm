// 单链表节点定义
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

//给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let sizeA: number = 0,
    sizeB: number = 0;
  let curA: ListNode | null = headA;
  let curB: ListNode | null = headB;
  while (curA) {
    sizeA++;
    curA = curA.next;
  }
  while (curB) {
    sizeB++;
    curB = curB.next;
  }
  curA = headA;
  curB = headB;
  if (sizeA < sizeB) {
    [sizeA, sizeB] = [sizeB, sizeA];
    [curA, curB] = [curB, curA];
  }
  let gap = sizeA - sizeB;
  while (gap-- && curA) {
    curA = curA.next;
  }
  while (curA && curB) {
    if (curA === curB) return curA;
    curA = curA.next;
    curB = curB.next;
  }
  return null;

}

// 调试辅助函数
function printList(head: ListNode | null): string {
  const arr: number[] = [];
  while (head) { arr.push(head.val); head = head.next; }
  return arr.join('->');
}

// 创建链表A: 0->9->1->2->4
let nodeA4 = new ListNode(4);
let nodeA2 = new ListNode(2, nodeA4);
let nodeA1 = new ListNode (1, nodeA2);
let nodeA9 = new ListNode(9, nodeA1);
let headA = new ListNode(0, nodeA9);
// 创建链表B: 3->2->4 (共享节点2和4)
let headB = new ListNode(3, nodeA2);

console.log('链表A:', printList(headA));
console.log('链表B:', printList(headB));
const inter = getIntersectionNode(headA, headB);
console.log('相交节点值:', inter ? inter.val : null);

export {};
