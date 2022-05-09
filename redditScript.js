// function that removes trendingpostscontainer from reddit.com and replaces it with a heading
window.addEventListener('load', () => {
    window.setTimeout(() => {
        console.log("Attepmting to remove trending posts");
        let posts = $('#TrendingPostsContainer');
        let postsParent = posts.parent();
        posts.remove();
        let heading = document.createElement('h1').innerText = 'THIS IS THE NEW TRENDING POSTS';
        postsParent.prepend(heading);
    }, 1000);
});