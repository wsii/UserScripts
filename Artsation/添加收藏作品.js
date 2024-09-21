// ==UserScript==
// @name         Button in the bottom left corner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a button to the bottom left corner of the page
// @author       You
// @match        http://*/*
// @match        https://www.artstation.com/artwork/*
// @grant        GM_xmlhttpRequest


// ==/UserScript==

(function() {
    'use strict';

data = 0

//远程调用API方法
function Sent2Eagle() {
      var requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    fetch("http://localhost:41595/api/item/addBookmark", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

function logout() {
    console.log("test");
}


var button11 = document.createElement("button");
button11.innerHTML = "特效_2D";
button11.style.position = "fixed";
button11.style.right = "100px";
button11.style.bottom = "50px";
button11.style.width = "150px"
button11.style.height = "40px"
button11.style.zIndex = '2000';
document.body.appendChild(button11);
// 调用函数以添加收藏
button11.addEventListener("click", function() {

});

var button12 = document.createElement("button");
button12.innerHTML = "特效_3D";
button12.style.position = "fixed";
button12.style.right = "280px";
button12.style.bottom = "50px";
button12.style.width = "150px"
button12.style.height = "40px"
button12.style.zIndex = '2000';
document.body.appendChild(button12);
// 调用函数以添加收藏
button12.addEventListener("click", function() {

});

var button5 = document.createElement("button");
button5.innerHTML = "贴图_写实";
button5.style.position = "fixed";
button5.style.right = "100px";
button5.style.bottom = "100px";
button5.style.width = "150px"
button5.style.height = "40px"
button5.style.zIndex = '2000';
document.body.appendChild(button5);
// 调用函数以添加收藏
button5.addEventListener("click", function() {

});

var button6 = document.createElement("button");
button6.innerHTML = "贴图_风格化";
button6.style.position = "fixed";
button6.style.right = "280px";
button6.style.bottom = "100px";
button6.style.width = "150px"
button6.style.height = "40px"
button6.style.zIndex = '2000';
document.body.appendChild(button6);
// 调用函数以添加收藏
button6.addEventListener("click", function() {

});

var button1 = document.createElement("button");
button1.innerHTML = "人物_2D_写实";
button1.style.position = "fixed";
button1.style.right = "100px";
button1.style.bottom = "150px";
button1.style.width = "150px"
button1.style.height = "40px"
button1.style.zIndex = '2000';
document.body.appendChild(button1);
// 调用函数以添加收藏
button1.addEventListener("click", function() {


});

var button2 = document.createElement("button");
button2.innerHTML = "人物_2D_风格化";
button2.style.position = "fixed";
button2.style.right = "280px";
button2.style.bottom = "150px";
button2.style.width = "150px"
button2.style.height = "40px"
button2.style.zIndex = '2000';
document.body.appendChild(button2);
// 调用函数以添加收藏
button2.addEventListener("click", function() {


});

var button3 = document.createElement("button");
button3.innerHTML = "人物_3D_写实";
button3.style.position = "fixed";
button3.style.right = "100px";
button3.style.bottom = "200px";
button3.style.width = "150px"
button3.style.height = "40px"
button3.style.zIndex = '2000';
document.body.appendChild(button3);
// 调用函数以添加收藏
button3.addEventListener("click", function() {


});

var button4 = document.createElement("button");
button4.innerHTML = "人物_3D_风格化";
button4.style.position = "fixed";
button4.style.right = "280px";
button4.style.bottom = "200px";
button4.style.width = "150px"
button4.style.height = "40px"
button4.style.zIndex = '2000';
document.body.appendChild(button4);
// 调用函数以添加收藏
button4.addEventListener("click", function() {

});


var button7 = document.createElement("button");
button7.innerHTML = "场景_2D_写实";
button7.style.position = "fixed";
button7.style.right = "100px";
button7.style.bottom = "250px";
button7.style.width = "150px"
button7.style.height = "40px"
button7.style.zIndex = '2000';
document.body.appendChild(button7);
// 调用函数以添加收藏
button7.addEventListener("click", function() {

});

var button8 = document.createElement("button");
button8.innerHTML = "场景_2D_风格化";
button8.style.position = "fixed";
button8.style.right = "280px";
button8.style.bottom = "250px";
button8.style.width = "150px"
button8.style.height = "40px"
button8.style.zIndex = '2000';
document.body.appendChild(button8);
// 调用函数以添加收藏
button8.addEventListener("click", function() {

});

var button9 = document.createElement("button");
button9.innerHTML = "场景_3D_写实";
button9.style.position = "fixed";
button9.style.right = "100px";
button9.style.bottom = "300px";
button9.style.width = "150px"
button9.style.height = "40px"
button9.style.zIndex = '2000';
document.body.appendChild(button9);
// 调用函数以添加收藏
button9.addEventListener("click", function() {
   
});

var button10 = document.createElement("button");
button10.innerHTML = "场景_3D_风格化";
button10.style.position = "fixed";
button10.style.right = "280px";
button10.style.bottom = "300px";
button10.style.width = "150px"
button10.style.height = "40px"
button10.style.zIndex = '2000';
document.body.appendChild(button10);
// 调用函数以添加收藏
button10.addEventListener("click", function() {


});





})();
