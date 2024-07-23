// public-src-js-feed.js

var postButton = document.querySelector('#post-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
    createPostArea.computedStyleMap.display = 'block';
    setTimeout(function () {
    createPostArea.computedStyleMap.transform = 'translateY(0)';
}, 1);
}

function closeCreatePostModal() {
    createPostArea.computedStyleMap.display = 'none';
}

postButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);