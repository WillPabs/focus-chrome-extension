// Takes image urls from /images, converts them to chrome extension urls and adds to array
let images = ['DeGods-5011-dead', 'GenMeta_3063', 'SolBirdzGreen'];
let imgUrls = [];
for (let image of images) {
    imgUrls.push(chrome.runtime.getURL(`/images/${image}.png`));
}

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
        $(img).css('position', 'relative'); // position must be set to relative otherwise left or right won't work
        contentsParent.prepend(img);

        let title = $("<h1>");
        title.html("DeadGod 5011");
        title.addClass('beautText');
        title.css('position', 'relative');
        contentsParent.append(title);

        let button = $("<button>");
        button.text('Press to cycle image');
        contentsParent.append(button);

        // Clicking the title element will move both img and title 200px to the left
        $('.beautText').click(() => {
            $(img).animate({left: '200px',}, 3000); 
            $(title).animate({left: '200px'}, 'slow');
        })
        

        // Button that allows user to cycle through images and changes title to corresponding image 
        let index = 0;
        let maxIndex = imgUrls.length;
        $(button).click(() => {
            if (index >= maxIndex) {
                index = 0;
            }
            img.src = imgUrls[index];
            title.html(`${images[index++]}`);
        })
    }, 1000);
})

