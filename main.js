// JQuery
// This function waits for the entire page to be loaded, then waits a second until the id contents is grabbed and removed from the page
window.addEventListener('load', () => {
    window.setTimeout(() => {
        let contents = $('#contents');
        let contentsParent = contents.parent();
        contents.remove();

        let img = new Image();
        img.src = chrome.runtime.getURL('/images/DeGods-5011-dead.png');
        img.width = 500;
        img.height = 500;
        contentsParent.prepend(img);

        let title = $("<h1>").html("DeadGod 5011");
        title.addClass('beautText');
        contentsParent.append(title);

        setTimeout(() => {
            let left = $('.beautText').offset().left;
            console.log(left);

            $('.beautText').click(() => {
                title.css({'left': left}).animate({left: '500px', right: ''}, 'slow');
                img.animate({height: '100px'});
                img.animate({right: '100px'});
                console.log('animating title');
            // title.animate({left: '', right: '200px'});
            })
        }, 2000);
        
    }, 1000);
})

