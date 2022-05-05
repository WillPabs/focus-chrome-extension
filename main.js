// This function waits for the entire page to be loaded, then waits a second until the id contents is grabbed and removed from the page
window.addEventListener("load", () => {
    window.setTimeout(() => {
        const contents = document.getElementById('contents');
        contents.remove();
    }, 1000);
});
