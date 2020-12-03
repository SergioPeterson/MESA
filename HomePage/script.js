const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const image = document.querySelector('.gallery_image');
const gallery_images = [
    './Img/homepage_gallery_1.jpg',
    './Img/homepage_gallery_2.jpg',
    './Img/homepage_gallery_3.jpg'
]
var pos = 0
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

next.addEventListener('click', nextImg)
prev.addEventListener('click', prevImg)
