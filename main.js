// Takes image urls from /images, converts them to chrome extension urls and adds to array
let images = ['DeGods-5011-dead', 'GenMeta_3063', 'SolBirdzGreen'];
let imgUrls = [];
for (let image of images) {
    imgUrls.push(chrome.runtime.getURL(`/images/${image}.png`));
}

// Makes an AJAX GET request to the URL, and it responds with an array of objects that each represent 
// data about an image. We fetch one randomly by its image ID, and populate it to the DOM
let ajaxImgs = [];
let randomImg = '';
$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    dataType: 'json',
    success: function(result) {
        console.log('Saved result to ajaxImgs');
        ajaxImgs = result;
    },
    error: function(err) {
     console.log('There was an error');
     console.log(err);
    }
}).done(() => {
    let randomNum = getRandomArbitrary(0, ajaxImgs.length);
    randomImg = ajaxImgs[randomNum];
});

// Gets random whole number between min and max
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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

        let img1 = new Image();
        img1.width = 500;
        img1.height = 500;
        img1.src = 'https://unsplash.it/1200/800?image=' + randomImg.id;
        contentsParent.append(img1);

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
        });
        

        // Button that allows user to cycle through images and changes title to corresponding image 
        let index = 0;
        let maxIndex = imgUrls.length;
        $(button).click(() => {
            if (index >= maxIndex) {
                index = 0;
            }
            img.src = imgUrls[index];
            title.html(`${images[index++]}`);
        });
    }, 1000);
})
