// console.log("ghbdtn");

// let tabs = document.querySelectorAll(".tab__item"),
//   tabContents = document.querySelectorAll(".tab-content");
// console.log("Количество табов:", tabs.length);
// console.log("Количество контентов:", tabContents.length);
// // Скрыть все табы, кроме одного
// function hideTabContent() {
//   tabContents.forEach((content) => {
//     content.classList.remove("show");
//     content.classList.add("hide");
//   });

//   tabs.forEach((tab) => {
//     tab.classList.remove("tab__item--active");
//   });
// }

// // Показать нужный таб
// function showTabContent(i) {
//   tabContents[i].classList.remove("hide");
//   tabContents[i].classList.add("show");

//   tabs[i].classList.add("tab__item--active");
// }

// // По умолчанию показываем первый таб
// hideTabContent();
// showTabContent(0);

// // Обработчик клика
// document.querySelector(".tabs").addEventListener("click", function (event) {
//   let target = event.target;

//   if (target && target.classList.contains("tab__item")) {
//     tabs.forEach((tab, index) => {
//       if (target === tab) {
//         hideTabContent();
//         showTabContent(index);
//       }
//     });
//   }
// });
class Tabs {
  constructor(root) {
    this.root = root;
    this.list = this.root.querySelector(":scope > [data-list]");
    this.buttons = new Map(
      [...this.list.querySelectorAll(":scope > [data-target]")].map((entry) => [
        entry.dataset.target,
        entry,
      ])
    );
    this.containers = new Map(
      [...this.root.querySelectorAll(":scope > [data-tab]")].map((entry) => [
        entry.dataset.tab,
        entry,
      ])
    );
    this.salt = Math.random().toString(36).slice(2);
    this.current = null;
    this.active = null;
  }

  select(name) {
    const keys = [...this.buttons.keys()];
    console.log("keys => ", keys);
    for (let [key, button] of this.buttons.entries()) {
      button.setAttribute("aria-selected", key === name);
    }

    for (let [key, container] of this.containers.entries()) {
      if (key === name) {
        container.removeAttribute("hidden");
        console.log("container => ", container);
      } else {
        container.setAttribute("hidden", true);
      }
    }

    this.active = keys.indexOf(name);
  }

  init() {
    const keys = [...this.buttons.keys()];

    this.list.setAttribute("role", "tablist");

    this.list.addEventListener("keydown", (event) => {
      if (event.code === "Home") {
        event.preventDefault();

        this.buttons.get(keys[0]).focus();
      }

      if (event.code === "End") {
        event.preventDefault();

        this.buttons.get(keys[keys.length - 1]).focus();
      }

      if (event.code === "ArrowLeft") {
        event.preventDefault();

        this.buttons.get(keys[Math.max(0, this.current - 1)]).focus();
      }

      if (event.code === "ArrowRight") {
        event.preventDefault();

        this.buttons
          .get(keys[Math.min(keys.length - 1, this.current + 1)])
          .focus();
      }
    });

    for (let [key, button] of this.buttons.entries()) {
      button.setAttribute("tabindex", "0");
      button.setAttribute("id", `button_${this.salt}_${key}`);
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", `container_${this.salt}_${key}`);

      button.addEventListener("click", (event) => {
        event.preventDefault();

        this.select(key);
      });

      button.addEventListener("focus", (event) => {
        this.current = keys.indexOf(key);
      });

      button.addEventListener("keypress", (event) => {
        if (event.code === "Enter" || event.code === "Space") {
          event.preventDefault();

          this.select(key);
        }
      });
    }

    for (let [key, container] of this.containers.entries()) {
      container.setAttribute("id", `container_${this.salt}_${key}`);
      container.setAttribute("role", "tabpanel");
      container.setAttribute("aria-labelledby", `button_${this.salt}_${key}`);
    }

    this.select(keys[0]);
  }

  static create(element) {
    const instance = new Tabs(element);
    instance.init();

    return instance;
  }
}

const containers = document.querySelectorAll("[data-tabs]");

for (let container of containers) {
  const tabs = Tabs.create(container);
  console.log(tabs);
}
