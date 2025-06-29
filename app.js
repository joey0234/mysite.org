const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.Hero-video');

const movieList = ['v.p/hero-1.mp4', 'v.p/hero-2.mp4','v.p/hero-3.mp4','v.p/hero-4.mp4',]

let index = 0;
nextButton.addEventListener('click', function(){

  index += 1
  video.src = movieList[index];

  if (index === 3) {
    index = -1;
  }

})