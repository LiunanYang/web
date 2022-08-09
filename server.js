// 链表
class Node{
  constructor(value, next){
    this.value = value
    this.next = next
  }
}
class MyLinkedList{
  constructor(){
    this.head = null
    this.count = 0
  };
  size(){
    return this.count;
  };
  push(el){
    const node = new Node(el)
    if(this.head == null){
      this.head = node
    }else{
      let current = this.head
      while(current.next!=null){
        current = current.next
      }
      current.next = node
    }
    this.count++
  };
  getElementAt(idx){
    if(idx>=0 && idx<=this.count){
      let current = this.head
      for(let i=0;i<idx;i++){
        current = current.next
      }
      return current
    }
  };
  indexOf(el){
    if(this.count > 0){
      const node = new Node(el)
      let current = this.head
      for(let i=0;i<this.count;i++){
        if(current.value == node.value){
          return i
        }
        current = current.next
      }
      return -1
    }
  };
  insert(el,pos){
    if(pos>=0 && pos<=this.count){
      const node = new Node(el)
      if(pos==0){
        node.next = this.head
        this.head = node
      }else{
        let prev = this.getElementAt(pos-1)
        node.next = prev.next
        prev.next = node
      }
      this.count++
    }
  };
  removeAt(idx){
    let delNode 
    if(idx==0){
      delNode=this.head
      this.head = this.head.next
    }
    else if(idx>0 && idx<this.count-1){
      let prev = this.getElementAt(idx-1)
      delNode=prev.next
      let current = prev.next.next
      prev.next = current
    }
    else if(idx==this.count-1){
      let prev = this.getElementAt(idx-1)
      delNode=prev.next
      prev.next = null
    }
    this.count--
    return delNode
  };
  remove(el){
    if(this.head!=null){
      const node = new Node(el)
      if(this.head.value == node.value){
        this.head = this.head.next
      }else{
        let current = this.head
        for(let i=0;i<this.count-1;i++){
          if(current.next.value == node.value){
            current.next = current.next.next
            this.count--
          }
          current = current.next
        }
      }
    }
  };
  isEmpty(){
    return this.count==0?true:false
  }
}

class DoublyNode extends Node{
  constructor(value,next,prev){
    super(value,next)
    this.prev = prev
  }
}
class DoublyLinkedList extends MyLinkedList{
  constructor(){
    super()
    this.tail = null
  };
  insert(el, pos){
    const node = new DoublyNode(el)
    if(pos==0){
      if(this.head==null){
        this.head = node
        this.tail = node
      }else{
        node.next = this.head
        this.head.prev = node
        this.head = node
      } 
    }else if(pos>0 & pos<this.count){
      
    }else if(pos=this.count){
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.count++
  }
}


let list = new MyLinkedList()
list.push(1)
// console.log(list)
let doublyList = new DoublyLinkedList()
// doublyList.push(1)
doublyList.insert('a',0)
doublyList.insert('b',0)
doublyList.insert('c',2)

console.log(doublyList)

let list = new MyLinkedList()
list.push('a')
list.push('b')
list.push('c')
list.push('d')
list.push('e')
// console.log(list)
// let circleItem = list.getElementAt(2)
// let tail = list.getElementAt(list.size()-1)
// tail.next = circleItem
// console.log(circleLinkedlist(list))

function circleLinkedlist(list){
  let slow = list.head
  let fast = list.head.next
  while(fast){
    if(slow==fast){
      return true
    }else{
      slow = slow.next
      fast = fast.next.next
    }
  }
  return false
}

function reverse(list){
  let prev = list.head
  let last = list.head.next
  let current
  prev.next = null
  for(let i=0; i<list.size()-2; i++){
    current = last
    last = current.next
    current.next = prev
    prev = current
  }
  list.head = last
  last.next = prev
}
reverse(list)
let cur = list.head
for(let i=0; i<list.size(); i++){
  console.log(cur)
  cur = cur.next
}

