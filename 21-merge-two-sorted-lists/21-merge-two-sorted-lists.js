/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Space Complexity 0(1)
//Time Complexity O(m+n)


var mergeTwoLists = function(list1, list2) {
 //first create a new list node > keeps appending new variable after comparison
    let curr = new ListNode();
//stop the loop
    const newVar = curr;
    while(list1 && list2) {
//comparison
        if(list1.val < list2.val) {
//pushing number for list1
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if(list1) {
        curr.next = list1;
    }
    if(list2) {
        curr.next = list2;
    }
    console.log(JSON.stringify(newVar))
    return newVar.next;
};