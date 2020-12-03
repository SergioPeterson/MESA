const next1 = document.querySelector('.next_1');
const prev1 = document.querySelector('.prev_1');
const image1 = document.querySelector('.Gallery_1');
const gallery_images1 = [
    '../Img/Gallery1_1.jpg',
    '../Img/Gallery1_2.jpg',
    '../Img/Gallery1_3.jpg'
]
var pos1 = 0
image1.src = gallery_images1[pos1];

const next2 = document.querySelector('.next_2');
const prev2 = document.querySelector('.prev_2');
const image2 = document.querySelector('.Gallery_2');
const gallery_images2 = [
    '../Img/Gallery2_1.jpg',
    '../Img/Gallery2_2.jpg',
    '../Img/Gallery2_3.jpg'
]
var pos2 = 0
image2.src = gallery_images2[pos2];


next1.addEventListener('click', function(){
  if(pos1 == gallery_images1.length-1){
      pos1 = 0
      image1.src = gallery_images1[pos1]
  }else{
      pos1 = pos1 + 1
      image1.src = gallery_images1[pos1]
  }
})
prev1.addEventListener('click', function(){
  if(pos1 == 0){
      pos1 = gallery_images1.length - 1
      image1.src = gallery_images1[pos1]
  }else{
      pos1 = pos1 - 1
      image1.src = gallery_images1[pos1]
  }
})
next2.addEventListener('click', function(){
  if(pos2 == gallery_images2.length-1){
      pos2 = 0
      image2.src = gallery_images2[pos2]
  }else{
      pos2 = pos2 + 1
      image2.src = gallery_images2[pos2]
  }
})
prev2.addEventListener('click', function(){
  if(pos2 == 0){
      pos2 = gallery_images2.length - 1
      image2.src = gallery_images2[pos2]
  }else{
      pos2 = pos2 - 1
      image2.src = gallery_images2[pos2]
  }
})

