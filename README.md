# focus-chrome-extension

This project aims to help a user focus when distracted.

When a user attempts to connect to youtube.com, the extension will remove the contents of the page and replace it with a single image.
- The image is randomly pulled from an array of images from an external api
- A new image is displayed every time the page is refreshed
- There is an additional feature that displays an NFT along with a title
  - A button is given to allow the user to cycle through the array of NFTs
  - When the title is clicked, an event will trigger to animate both the title and NFT
