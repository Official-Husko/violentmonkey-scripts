// ==UserScript==
// @name        LZMODS Skip Wait Time
// @namespace   https://github.com/cilxe/JavaScriptProjects
// @match       https://lzmods.com/*
// @match       https://iseekgames.com/*
// @grant       none
// @version     1.0
// @author      Official Husko
// @icon        https://i.pinimg.com/originals/43/de/55/43de55cb650145ca3aba60c0bf3a81c6.png
// @description 12/15/2023, 9:15:10 AM
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide or remove the specified elements
    function modifyAdditionalElements() {
        // Hide or remove the first div
        var firstDiv = document.querySelector('body.post-template-default .waiting-block.wfl_pretimer');
        if (firstDiv) {
            firstDiv.style.display = 'none';
        }

        // Show the second div
        var secondDiv = document.querySelector('body.post-template-default .wfl_active-timer');
        if (secondDiv) {
            secondDiv.style.display = ''; // To make it visible, you can also use 'block' if needed
            // You can add additional logic here if needed
        }

        // Remove the additional elements
        removeElement('body.post-template-default article.gutter-top');
        removeElement('body.post-template-default div#recommended');
        removeElement('body.post-template-default div#comments.comments-area.grid.wrap.inner');
        removeElement('body.post-template-default footer#footer');
        removeElement('.is-4');
        removeElement('.site-footer');
        removeElement('.comments-area');
        removeElement('.navigation');

        // Remove elements with dynamic IDs (e.g., post-221, post-223)
        removeElementsWithDynamicIdPrefix('body.post-template-default [id^="post-"]');

        // Change the text inside the specified div to "hello" with a clickable link
        addLinkToDiv('body.post-template-default div.wfl-text.top', 'Bypass Script by ', 'https://github.com/Official-Husko', 'Official Husko', ' on GitHub!');
    }

    // Function to remove an element by selector
    function removeElement(selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.remove();
        }
    }

    // Function to add a clickable link to a specified div
    function addLinkToDiv(selector, textBeforeLink, link, textLink, textAfterLink) {
        var targetDiv = document.querySelector(selector);
        if (targetDiv) {
            var linkElement = document.createElement('a');
            linkElement.textContent = textLink;
            linkElement.href = link;
            linkElement.target = '_blank';

            // Create spans for the text before and after the link
            var textBeforeLinkElement = document.createElement('span');
            textBeforeLinkElement.textContent = textBeforeLink;

            var textAfterLinkElement = document.createElement('span');
            textAfterLinkElement.textContent = textAfterLink;

            // Clear existing content and append the span, link, and additional text span elements
            targetDiv.innerHTML = '';
            targetDiv.appendChild(textBeforeLinkElement);
            targetDiv.appendChild(linkElement);
            targetDiv.appendChild(textAfterLinkElement);
        }
    }

    // Function to remove elements with dynamic IDs
    function removeElementsWithDynamicIdPrefix(selectorPrefix) {
        var elements = document.querySelectorAll(selectorPrefix);
        elements.forEach(function(element) {
            element.remove();
        });
    }

    // Run the modification functions when the entire page is fully loaded
    window.onload = function() {
        modifyAdditionalElements();
    };
})();
