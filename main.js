// JQuery
// This function waits for the entire page to be loaded, then waits a second until the id contents is grabbed and removed from the page
window.addEventListener('load', () => {
    window.setTimeout(() => {
        let contents = $('#contents');
        let contentsParent = contents.parent();
        contents.remove();
        let img = new Image();
        img.src = chrome.runtime.getURL('/images/DeGods-5011-dead.png');
        contentsParent.prepend(img);
        let title = $("<div>").html("DeadGod 5011");
        contentsParent.prepend(title);
    }, 1000);
})
