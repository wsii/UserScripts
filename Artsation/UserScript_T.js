// ==UserScript==
// @name         Button in the bottom left corner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a button to the bottom left corner of the page
// @author       You
// @match        http://*/*
// @match        https://wnacg.com/*
// @grant        GM_xmlhttpRequest


// ==/UserScript==

(function() {
    'use strict';

var data = {
    "url": "",
    "name": "",
    "tags": [],
    "base64":"",
};

var name = document.querySelector("div[id='bodywrap'] h2").innerHTML;

var weburl = window.location.href;

var xpath = "//div[@class='asTBcell uwthumb']/img";

var imgurl = document.evaluate(xpath, document).iterateNext().src;

var taglist = []

var tags = document.getElementsByClassName("tagshow");

for (let index = 0; index < tags.length; index++) {
    taglist[index] = tags[index].innerHTML;
}


data.url = weburl;
data.name = name;
data.tags = taglist;

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




var button = document.createElement("button");
button.innerHTML = "Sent to Eagle";
button.style.position = "fixed";
button.style.right = "100px";
button.style.top = "100px";
button.style.width = "200px"
button.style.height = "100px"
document.body.appendChild(button);

button.addEventListener("click", function() {
    setTimeout(logout(), 500);

});


})();
