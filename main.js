// This function waits for the entire page to be loaded, then waits a second until the id contents is grabbed and removed from the page
// window.addEventListener("load", () => {
//     window.setTimeout(() => {
//         const contents = document.getElementById('contents');
//         contents.remove();
//     }, 1000);
// });


//JQuery
let contents = $('contents');
let contentsParent = contents.parent();
contents.remove();
let img = new Image();
img.src = chrome.runtime.getURL('/images/DeGods-5011-dead.png');
contentsParent.prepend(img);
