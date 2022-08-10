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

const demo = {a: false, b: undefined, c: null};
const {a = 1, b = 2, c = 3} = demo;

console.log(a, b, c);
false 2 null

const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);
1 2 4 

console.log('script start') 

async function async1() {
  await async2()
  console.log('async1 end') 
}

async function async2() {
  console.log('async2 end')
}

async1()

setTimeout(function() {
  console.log('setTimeout')
}, 0)

new Promise(resolve => {

console.log('Promise')
  resolve()
})
.then(function() {
  console.log('promise1')
})
.then(function() {
  console.log('promise2') 
})

console.log('script end')

'script start'
'async2 end'
'Promise'
'script end'
'async1 end'
'promise1'
'promise2'
'setTimeout'

'script start' 'async2 end' 'async1 end' 'Promise' 'script end' 'promise1' 'promise2' 'setTimeout'

const deepClone = target => {
  if(typeof target == 'object'){
    let cloneTarget = Array.isArray(target) ? [] :{}
    for(let item in target){
      cloneTarget[item] = deepClone(target[item])
    }
    return cloneTarget
  } else {
    return target
  }
};


根据一棵树的前序遍历与中序遍历构造二叉树。
注意:
你可以假设树中没有重复的元素。
节点
 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 };
例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
输出：
图片: https://uploader.shimo.im/f/S1ZZKKFqPOZb06mf.png!thumbnail?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2NjAxMzk3MjcsImZpbGVHVUlEIjoiWnprTFZNWm4yamlLbW8zUSIsImlhdCI6MTY2MDEzOTQyNywiaXNzIjoidXBsb2FkZXJfYWNjZXNzX3Jlc291cmNlIiwidXNlcklkIjo4MjMxNzg0N30.w_ucoOt3OiMUJRDuzdgmVFWvVr014m8naagZoNPDsik
{
    val: 3,
    left: {val: 9, right: null, left: null},
    right: {
        val: 20,
        right:  {val: 7, right: null, left: null},
        left:  {val: 15, right: null, left: null}
    }
}

const buildTree = （preoder = [], inorder = []） => {
  if(preoder.length==0){
    return null
  }
  let node = new TreeNode(preoder[0])
  let rootIndex = inorder.indexOf(preoder[0])
  let inorderLeft = inorder.slice(0,rootIndex)
  let inorderRight = inorder.slice(rootIndex+1)
  let preoderLeft = preoder.slice(1,rootIndex)
  let preoderRight = preoder.slice(rootIndex+1)
  node.left = buildTree(preoderLeft,inorderLeft)
  node.right = buildTree(preoderRight,inorderRight)
  return node
};

