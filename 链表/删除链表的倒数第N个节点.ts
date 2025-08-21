// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

//版本1 快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let newHead: ListNode | null = new ListNode(0, head);
  let slowNode: ListNode = newHead;
  let fastNode: ListNode = newHead;

  while (n--) {
    fastNode = fastNode.next!; //右虚拟头节点前进n个节点时，fastnode.next可推断不为null
  }
  while (fastNode.next) {//遍历直至fastNode.next = null,即尾部节点。此时slowNode指向倒数第n个节点
    fastNode = fastNode.next;
    slowNode = slowNode.next!;
  }
  slowNode.next = slowNode.next!.next;//倒数第n个节点可推断其next节点不为空
  return newHead.next;
}

//版本2 计算节点总数法
function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  let curNode: ListNode | null = head;
  let listSize: number = 0;
  while (curNode) {
    curNode = curNode.next;
    listSize++;
  }
  if (listSize === n) {
    head = head!.next;
  } else {
    curNode = head;
    for (let i = 0; i < listSize - n - 1; i++) {
      curNode = curNode!.next;
    }
    curNode!.next = curNode!.next?.next || null; //如果curNode.next为null，直接返回null
  }
  return head;
}

//版本3 递归倒退n法
function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  let newHead: ListNode | null = new ListNode(0, head);
  let cnt = 0;
  function recur(node: ListNode | null): void {
    if (node === null) return;
    recur(node.next);
    cnt++;
    if (cnt === n + 1) {
      node.next = node.next?.next || null;
    }
  }
  recur(newHead);
  return newHead!.next;
}

