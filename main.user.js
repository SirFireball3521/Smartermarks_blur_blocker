// ==UserScript==
// @name         Smartermarks Blur Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @include      https://smartermarks.com/*
// @description  Prevents Smartermarks from detecting tab changes
// @author       SirFireball
// @match        https://www.tampermonkey.net/scripts.php?version=4.12.6132&ext=fire&updated=true
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==
window.jQuery310 = $.noConflict(true);
(function() {
    $(window).off('blur');
    $(window).off('focus');
})();
