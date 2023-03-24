const menuButton = document.querySelectorAll(".header_nav_menu_item");

const headerSubMenu = document.querySelectorAll(".header_submenu");

const arrowIconMenu = document.querySelectorAll(
  ".header_nav_menu_item_link_icon"
);

const menuMobileBtn = document.querySelector(".menu_mobile_icon");

const headerNavMenu = document.querySelector(".header_nav_menu");
console.log("menu", menuButton);
Array.from(menuButton)
  .slice(0, 3)
  .forEach((btn, index) => {
    btn.addEventListener("click", () => {
      headerSubMenu.forEach((sub, ind) => {
        if (index !== ind) sub.classList.remove("show_header_submenu");
      });
      arrowIconMenu.forEach((arrow, ind) => {
        if (index !== ind) arrow.classList.remove("rotate");
      });
      headerSubMenu[index].classList.toggle("show_header_submenu");
      arrowIconMenu[index].classList.toggle("rotate");
    });
  });

document.addEventListener("click", (e) => {
  let clickArea;
  menuButton.forEach((item) => {
    if (item.contains(e.target)) clickArea = true;
  });

  if (!clickArea) {
    headerSubMenu.forEach((subMenu) => {
      subMenu.classList.remove("show_header_submenu");
    });
    arrowIconMenu.forEach((arrow) => {
      arrow.classList.remove("rotate");
    });
  }
});

menuMobileBtn.addEventListener("click", (e) => {
  menuMobileBtn.classList.toggle("menu_close");
  if (menuMobileBtn.classList.contains("menu_close")) {
    headerNavMenu.classList.add("show_header_nav_menu");
  } else {
    headerNavMenu.classList.remove("show_header_nav_menu");
  }
});

/* window.addEventListener("resize", () => {
  console.log("width: " + window.innerWidth + "height: " + window.innerHeight);
}); */
