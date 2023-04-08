
const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('.image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');

let currentIndex = 0;
let timerId;


images[currentIndex].classList.add('active');

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
 images[index].classList.add('active');
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
   showImage(currentIndex);
}

function playPause() {

  if (timerId) {
    clearInterval(timerId);
    timerId = null;
    playPauseBtn.textContent = 'Pause/Play';
  }
 
  else {
    timerId = setInterval(nextImage, 3000);
    playPauseBtn.textContent = 'Pause/Play';
  }
}


prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
playPauseBtn.addEventListener('click', playPause);


timerId = setInterval(nextImage, 3000);