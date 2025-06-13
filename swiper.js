const swiper = new Swiper(".swiper-main", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    // when window width is >= 420px
    300: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    430: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 1600px
    1700: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const swiperDoc = new Swiper(".swiper-doc", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  loopAdditionalSlides: 0,
  breakpoints: {
    // when window width is >= 420px
    300: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    430: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    // when window width is >= 1600px
    1700: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});
const swiperPrniew = new Swiper(".swiper-preview", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto", // можно попробовать
  loop: false,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 420px
    300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    430: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 1600px
    1700: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
  },
});

const swiperPrniewDone = new Swiper(".swiper-preview-done", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto", // можно попробовать
  loop: false,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 420px
    300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 24,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    // when window width is >= 1600px
    1700: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
  },
});
const swiperOrderBanner = new Swiper(".swiper-order-banner", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto", // можно попробовать
  loop: false,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 420px
    300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
const swiperOrderBannerProfile = new Swiper(".swiper-order-banner__profile", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto", // можно попробовать
  loop: false,
  watchOverflow: true,
  breakpoints: {
    // when window width is >= 420px
    300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});
//

// const catalog = document.querySelector(".catalog");
// const productCard = catalog.querySelector(".product-card");

// console.log(catalog);

// // Сколько всего нужно карточек?
// const totalCardsNeeded = 13;

// // Сколько сейчас?
// const currentCards = catalog.querySelectorAll(".product-card").length;

// // Сколько нужно добавить?
// const cardsToAdd = totalCardsNeeded - currentCards;

// for (let i = 0; i < cardsToAdd; i++) {
//   // Клонируем существующий элемент
//   const clone = productCard.cloneNode(true); // true — глубокое копирование, включая дочерние элементы

//   // Добавляем клон в каталог
//   catalog.appendChild(clone);
// }
