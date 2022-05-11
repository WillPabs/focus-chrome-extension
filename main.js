// JQuery
// This function waits for the entire page to be loaded, then waits a second until the id contents is grabbed and removed from the page
$(window).on('load', () => {
    setTimeout(() => {
        let contents = $('#contents');
        let contentsParent = contents.parent();
        contents.remove();

        let img = new Image();
        img.src = chrome.runtime.getURL('/images/DeGods-5011-dead.png');
        img.width = 500;
        img.height = 500;
        contentsParent.prepend(img);

        let title = $("<h1>");
        title.html("DeadGod 5011");
        title.addClass('beautText');
        contentsParent.append(title);

        // Clicking the title element will move both img and title 200px to the left
        $('.beautText').click(() => {
            $(img).css('position', 'relative').animate({left: '200px',}, 3000); // position must be set to relative otherwise left or right won't work
            $(title).css('position', 'relative').animate({left: '200px'}, 'slow'); // ""    ""     "" 
        })
        
    }, 1000);
})

