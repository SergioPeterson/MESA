const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const image = document.querySelector('.gallery_image');
const gallery_images = [
    '../Img/AeroImage1.jpg',
    '../Img/AeroImage3.jpg',
    '../Img/AeroImage4.jpg',
    '../Img/AeroImage2.jpg'
]
var pos = 0
const start_scroll = '2484px';

image.src = gallery_images[pos];
function nextImg(){
    if(pos == gallery_images.length-1){
        pos = 0
        image.src = gallery_images[pos]
    }else{
        pos = pos + 1
        image.src = gallery_images[pos]
    }
}
function prevImg(){
    if(pos == 0){
        pos = gallery_images.length - 1
        image.src = gallery_images[pos]
    }else{
        pos = pos - 1
        image.src = gallery_images[pos]
    }
}