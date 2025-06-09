const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

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

let tabs = document.querySelectorAll(".tab__item"),
  tabContents = document.querySelectorAll(".tab-content");

// Скрыть все табы, кроме одного
function hideTabContent() {
  tabContents.forEach((content) => {
    content.classList.remove("show");
    content.classList.add("hide");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("tab__item--active");
  });
}

// Показать нужный таб
function showTabContent(i) {
  tabContents[i].classList.remove("hide");
  tabContents[i].classList.add("show");

  tabs[i].classList.add("tab__item--active");
}

// По умолчанию показываем первый таб
hideTabContent();
showTabContent(0);

// Обработчик клика
document.querySelector(".tabs").addEventListener("click", function (event) {
  let target = event.target;

  if (target && target.classList.contains("tab__item")) {
    tabs.forEach((tab, index) => {
      if (target === tab) {
        hideTabContent();
        showTabContent(index);
      }
    });
  }
});
