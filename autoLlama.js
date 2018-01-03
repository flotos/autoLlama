// ==UserScript==
// @name         Auto Llama
// @namespace    https://github.com/flotos/autoLlama
// @version      1.0
// @description  Follow&Like automatically on tumblr
// @author       Florian Peyron | flotos
// @match        *://*.tumblr.com/search*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/flotos/autoLlama/master/autoLlama.js
// @updateURL    https://raw.githubusercontent.com/flotos/autoLlama/master/autoLlama.js
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