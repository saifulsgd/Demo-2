
var image = ['images/slide_01.jpg', 'images/slide_02.jpg','images/slide_03.jpg', 'images/slide_01.jpg','images/slide_02.jpg'];
var imgtag = document.querySelector(".imagess");
let index = 0;

function next() {
     index++;
    if (index < image.length) {
        
        imgtag.src = image[index];
    } else {
        index = 0;
        imgtag.src = image[index];
    }
};

function prev() {
    index--;
    if (index < 0) {
        index = image.length - 1;
        imgtag.src = image[index];
    } else {
        imgtag.src = image[index];
    } 
};