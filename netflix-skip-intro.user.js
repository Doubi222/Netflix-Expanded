// ==UserScript==
// @name          Skip Netflix Intro
// @version       0.3
// @description   Automatically click the netflix "Skip intro" button when it appears.
// @license       MIT
// @author        Loky (StellarisStudio)
// @icon          https://raw.githubusercontent.com/StellarisStudio/Netflix-Expanded/master/img/ico3.jpg
// @namespace     https://github.com/StellarisStudio
// @supportURL    https://github.com/StellarisStudio/Netflix-Expanded
// @homepageURL   https://github.com/StellarisStudio/Netflix-Expanded
// @match         *://www.netflix.com/*
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    const callback = (mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type == 'childList' && mutation.addedNodes.length) {
                const skipCredit = Array.from(mutation.addedNodes).find((node) => {
                    return node.classList && node.classList.contains('skip-credits');
                });
                if (skipCredit) {
                    skipCredit.querySelector('a').click();
                    return;
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
