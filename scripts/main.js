// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

/*
let myVariable = document.querySelector('h1');
以及上面所有示例都是对象。
*/
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test_img1.png') {
      myImage.setAttribute('src', 'images/test_img2.png');
    } else {
      myImage.setAttribute('src', 'images/test_img1.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to my page，' + myName + '!';
  }
}
// 初始化代码，因为它在页面初次读取时进行构造工作
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to my page，' + storedName + '!';
}
// 按钮设置 onclick 事件处理器
myButton.onclick = function() {
   setUserName();
}
