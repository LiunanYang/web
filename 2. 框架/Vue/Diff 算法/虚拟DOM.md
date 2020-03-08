```
    function createComponent(tag){
      let child =[]
      for(let i=0;i<tag.children.length ;i++){
        if(tag.children[i].children.length=0){
          child[i]={
            tag:tag.children[i].nodeName.toLowerCase(),
            props:tag.children[i].attributes,
            context:tag.children[i].innerText,
            children:[]
          }
        }else{
          child[i] = createComponent(tag.children[i]) 
        }
      }
      let vNode={
        tag:tag.nodeName.toLowerCase(),
        props:tag.attributes,
        context:tag.childNodes[0].nodeValue,
        children:child
      }
      return vNode
    }
```