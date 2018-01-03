// ==UserScript==
// @name         Auto Llama
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.deviantart.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
    console.log("Started");
    // Your code here...
    Array.from(
        document
        .getElementsByClassName('oclb oclb-give'))
        .forEach((elm, index) =>
            {
                setTimeout(() => {
                    console.log("Clicked", index);
                    elm.click();
                }, index * (Math.random() * (10000)+100));
                if(index === document.getElementsByClassName('ocld ocld-give').length) {
                    //console.log("Next soon", index);
                    //setTimeout(()=>document.getElementsByClassName('away')[document.getElementsByClassName('away').length-1], index*10000);
                }
            }
        );
    }, 4000);
})();