class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
        //same as singly linked list Node class, with the addition of this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    //removes the node from the beginning of the list
    shift() {
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head === null;
            this.tail === null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    //add one value to the front of the list
    unshift() {
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length - 1;
            let current = this.tail
            while(count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
}