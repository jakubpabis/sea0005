// from SUMEDIA.NL

function SUMEDIAvideoCarousel() {
  $('.video-cards').each(function () {
    $(this).owlCarousel({
      loop: !0,
      nav: !1,
      dots: !1,
      lazyLoad: 0,
      center: true,
      autoplay: false,
      responsive: {
        0: { items: 1, margin: 15 },
        767: { items: 2, margin: 20 },
        991: { items: 2, margin: 30 },
        1260: { items: 3, margin: 30 },
      },
    });
  });

  $('.custom-owl-prev-video').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.custom-owl-next-video').click(function () {
    owl.trigger('next.owl.carousel');
  });

  var owl = $('.video-cards');
  owl.owlCarousel();
  const playButtons = document.querySelectorAll(
    '.video-placeholder, .play-video'
  );
  const videoItems = document.querySelectorAll('.video');

  owl.on('changed.owl.carousel', function (event) {
    for (let i = 0; i < playButtons.length; i += 1) {
      playButtons[i].parentElement.classList.remove('active');
    }

    for (let x = 0; x < videoItems.length; x += 1) {
      videoItems[x].load();
    }
  });
}

function SUMEDIAquoteCarousel() {
  $('.quote-carousel').each(function () {
    $(this).owlCarousel({
      loop: !0,
      nav: 1,
      dots: !1,
      lazyLoad: 0,
      center: true,
      autoplay: false,
      items: 1,
    });

    var owl = $('.quote-carousel');
    owl.owlCarousel();

    $('.custom-owl-prev-quote').click(function () {
      owl.trigger('prev.owl.carousel');
    });

    $('.custom-owl-next-quote').click(function () {
      owl.trigger('next.owl.carousel');
    });
  });
}

function SUMEDIAswitchDNA() {
  const dnaSwitcher = document.querySelector('.switch-dna');

  if (dnaSwitcher) {
    dnaSwitcher.addEventListener('click', () => {
      var dnaItem =
        dnaSwitcher.parentElement.parentElement.parentElement.querySelectorAll(
          '.dna__items__item'
        );
      var dnaSwitcherItem = dnaSwitcher.querySelectorAll('.switch-dna--item');

      if (dnaItem[0].classList.contains('active')) {
        dnaItem[0].classList.remove('active');
        dnaItem[1].classList.add('active');

        dnaSwitcherItem[0].classList.remove('active');
        dnaSwitcherItem[1].classList.add('active');

        dnaSwitcher.id = dnaItem[1].id;
      } else if (dnaItem[1].classList.contains('active')) {
        dnaItem[1].classList.remove('active');
        dnaItem[2].classList.add('active');

        dnaSwitcherItem[1].classList.remove('active');
        dnaSwitcherItem[2].classList.add('active');

        dnaSwitcher.id = dnaItem[2].id;
      } else if (dnaItem[2].classList.contains('active')) {
        dnaItem[2].classList.remove('active');
        dnaItem[0].classList.add('active');

        dnaSwitcherItem[2].classList.remove('active');
        dnaSwitcherItem[0].classList.add('active');

        dnaSwitcher.id = dnaItem[0].id;
      }
    });
  }
}

function SUMEDIAplayVideo() {
  const playButtons = document.querySelectorAll('.play-video');
  const videoItems = document.querySelectorAll('.video');
  const video = document.querySelector('video');
  const close = document.querySelector('.videos .mfp-close');
  if (close != null) {
    close.onclick = () => {
      video.pause();
    };
  }
  if (playButtons.length > 0) {
    for (let i = 0; i < playButtons.length; i += 1) {
      playButtons[i].addEventListener('click', () => {
        playButtons[i].parentElement.classList.add('active');

        if (videoItems.length > 0) {
          for (let x = 0; x < videoItems.length; x += 1) {
            if (videoItems[x].parentElement.classList.contains('active')) {
              videoItems[x].play();
            }
          }
        }
      });
    }
  }
}

$(document).ready(function () {
  SUMEDIAvideoCarousel();
  SUMEDIAquoteCarousel();
  SUMEDIAplayVideo();
  SUMEDIAswitchDNA();
});
