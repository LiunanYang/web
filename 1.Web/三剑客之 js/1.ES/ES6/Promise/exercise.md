1.
```js
	Promise.resolve().then(() => {
    console.log('1');
    throw 'Error';
    }).then(() => {  
    console.log('2');
    }).catch(() => {
    console.log('3');   
    throw 'Error';
    }).then(() => {   
    console.log('4');
    }).catch(() => {    
    console.log('5');
    }).then(() => {   
    console.log('6');
  });
```
2.
```js
  Promise.reject('error')
  .then( ()=>{console.log('success1')}, ()=>{console.log('error1')} )
  .then( ()=>{console.log('success2')}, ()=>{console.log('error2')} )
```