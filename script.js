/* -----------------------------------------
   🎉 PHOTOS (Put your 10 images inside /photos/)
------------------------------------------ */
const photos = [
  "adaa.png", "kurti.png", "sare.png", "sareepose.png",
  "sty.png", "lehen.jpg", "mandir.png", "kurti.png", "baaratphoto.jpg"
];

/* -----------------------------------------
   💬 Birthday Messages (A + B + C)
------------------------------------------ */
const messages = [
  "🎂 Heyyyy cutieee! Ready for something special? 😘",
  "🍫 You're sweeter than chocolate… and 100x prettier! 💕",
  "💖 No words can match how special you are, Happy Birthdayyy! 🎉"
];

let msgIndex = 0;

/* -----------------------------------------
   🎉 Show Messages Before Slideshow
------------------------------------------ */
document.querySelector(".message-scene").style.display = "flex";

document.querySelector(".birthday-text").innerHTML = messages[msgIndex];

document.querySelector(".next-message-btn").addEventListener("click", () => {
  msgIndex++;
  if (msgIndex < messages.length) {
    document.querySelector(".birthday-text").innerHTML = messages[msgIndex];
  } else {
    document.querySelector(".message-scene").style.display = "none";
    showSurprise();
  }
});

/* -----------------------------------------
   🎊 Confetti
------------------------------------------ */
function confettiBlast(){
  for(let i=0;i<200;i++){
    let conf = document.createElement('div');
    conf.className='confetti';
    conf.style.left=Math.random()*100+'vw';
    conf.style.setProperty('--h', Math.random());
    conf.style.animationDuration=(Math.random()*3+2)+'s';
    document.body.appendChild(conf);
    setTimeout(()=>conf.remove(),3000);
  }
}

/* -----------------------------------------
   🎬 Surprise Reveal + Start Slideshow
------------------------------------------ */
function showSurprise(){
  confettiBlast();
  activateFullscreenMode();
  startSlideshow();
}

/* -----------------------------------------
   🖼 Fullscreen Mode ON
------------------------------------------ */
function activateFullscreenMode(){
  document.body.classList.add("fullscreen-active");
}

/* -----------------------------------------
   🎥 Slideshow Every 40 Sec
------------------------------------------ */
let slideIndex = 0;
function startSlideshow(){
  setInterval(changeSlide, 10000);
}

function changeSlide(){
  let hero = document.getElementById("heroImage");
  hero.style.opacity = 0;
  setTimeout(() => {
    hero.src = photos[slideIndex];
    slideIndex = (slideIndex + 1) % photos.length;
    hero.style.opacity = 1;
  }, 400);
}

/* -----------------------------------------
   📺 Load Carousel Thumbnails
------------------------------------------ */
const carouselRow = document.querySelector(".carousel-row");

photos.forEach((src, i)=>{
  let div = document.createElement("div");
  div.className = "carousel-item";
  div.style.backgroundImage = `sareepose.png`;
  div.onclick = () => {
    slideIndex = i;
    document.getElementById("heroImage").src = src;
  };
  carouselRow.appendChild(div);
});
