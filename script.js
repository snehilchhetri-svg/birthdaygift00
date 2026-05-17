// Function to start music
function playMusic() {
  const music = document.getElementById('background-music');

  if (!music) {
    console.log("Audio element not found");
    return;
  }

  music.volume = 0.5;

  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Music playing");
      })
      .catch((err) => {
        console.log("Music blocked:", err);
      });
  }
}

let currentSlide = 0;

document.body.addEventListener('click', function startAll() {
  playMusic();
}, { once: true });

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date('may 18, 2026 00:00:00').getTime(),
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('hours').innerText = Math.floor(distance / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      confetti();
      clearInterval(x);
      _slideOne();
    }

  }, second)

const _slideOne = function () {
  const tap = document.getElementById('tap');
  const slideOne = document.getElementById('slideOne');

  slideOne.classList.remove('d-none');

  setTimeout(function () {
    tap.classList.remove('d-none');

    document.body.addEventListener('click', function () {
      _slideTwo();
    })

  }, 7000);
};

const _slideTwo = function () {
  const slideOne = document.getElementById('slideOne');
  const tap = document.getElementById('tap');
  const slideTwo = document.getElementById('slideTwo');

  setTimeout(function () {
    slideOne.classList.replace('animate__slideInDown', 'animate__backOutDown');
    tap.classList.add('d-none');

    setTimeout(function () {
      slideOne.classList.add('d-none');
    }, 1000);

  }, 1000);

  slideTwo.classList.remove('d-none');

  setTimeout(function () {
    tap.classList.remove('d-none');

    document.body.addEventListener('click', function () {

      slideTwo.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideTwo.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');

      setTimeout(function () {
        slideTwo.remove();
        _slideThree();
      }, 1000);

    })

  }, 40000);
};

const _slideThree = function () {
  const tap = document.getElementById('tap');
  const slideThree = document.getElementById('slideThree');

  slideThree.classList.remove('d-none');

  setTimeout(function () {
    tap.classList.remove('d-none');

    document.body.addEventListener('click', function () {

      slideThree.classList.remove('animate__delay-2s', 'animate__slow');
      slideThree.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.remove();

      setTimeout(function () {
        slideThree.remove();
        _slideFour();
      }, 1000);

    })

  }, 43000);
}

function getRandomPosition(element) {
  var x = document.body.offsetHeight - element.clientHeight;
  var y = document.body.offsetWidth - element.clientWidth;

  var randomX = Math.floor(Math.random() * 500);
  var randomY = Math.floor(Math.random() * y);

  return [randomX, randomY];
};

const _slideFour = function () {
  const slideFour = document.getElementById('slideFour');
  const btn = document.getElementsByTagName('button');

  slideFour.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    var xy = getRandomPosition(slideFour);
    slideFour.style.top = xy[0] + 'px';
  });

  btn[1].addEventListener('click', function () {

    slideFour.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideFour.classList.remove('animate__delay-2s');

    setTimeout(function () {

      slideFour.remove()

      setTimeout(() => {
        _slideFive();
      }, 500);

    }, 1000);

  })
};

const _slideFive = function () {
  const slideFive = document.getElementById('slideFive');

  slideFive.classList.remove('d-none');

  const thanks = document.getElementById('thanks');

  setTimeout(() => {
    thanks.classList.remove('d-none');
  }, 1000);

  slideFive.addEventListener('animationend', () => {

    slideFive.classList.add('animate__delay-3s')
    slideFive.classList.replace('animate__bounceIn', 'animate__fadeOut');

    thanks.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');

    setTimeout(() => {

      thanks.remove();

      setTimeout(() => {
        slideFive.remove();
        _slideSix();
      }, 1000);

    }, 6000);

  });
};

new TypeIt("#text1", {
  strings: ["\n\nHappy Birthday prety girl.\n\nI don’t think u truly realize how much light u carry around with u. Some people walk into a room and simply exist, but u somehow make places feel softer, calmer, happier — just by being there.\n\nur one of the few people who can make ordinary moments feel important. A simple conversation with u never really feels special.Somehow ur laugh stays in people’s heads long after the moment ends, and ur presence has this strange way of making bad days feel lighter.\n\nI hope this year gives u back even a fraction of the kindness, care, and warmth u give to everyone else so naturally."],
  startDelay: 4000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#text2", {
  strings: ["And honestly, I hope u never lose the little things that make u *u*:\n\nthe way u r chaldish,\nthe way u smile when ur genuinely happy,\nthe way u try to change ur voice ,\nthe way ur existence quietly becomes important to people without u even realizing it.\n\nu deserve memories that make u smile randomly months later.\nu deserve people who choose u with certainty.\nu deserve peace in ur mind, softness in ur heart, and happiness that doesn’t leave quickly.\n\nSo today, I just hope you feel loved.\nNot because it’s ur birthday,\nbut because someone as beautiful as you — inside and out — genuinely deserves to.\n\nHappy Birthday again.\nAnd thank u for being u.", "- Wish u all the best"],
  startDelay: 2000,
  speed: 75,
  waitUntilVisible: true
}).go();

new TypeIt("#thanks", {
  strings: ["Thank you."],
  startDelay: 2000,
  speed: 150,
  loop: false,
  waitUntilVisible: true,
}).go();

function confetti() {
  //full confetti here
}
