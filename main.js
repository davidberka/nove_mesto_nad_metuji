const burgerMenu = document.querySelector(".burger");
const slideNav = document.querySelector(".header_row2");

burgerMenu.addEventListener("click", () => {
  slideNav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

if (window.innerWidth < 1024) {
  const navLinks = document.querySelectorAll(".nav_links > li > a");
  const dropdownMenus = document.querySelectorAll(".dropdown_menu");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // remove active className
      dropdownMenus.forEach((menu) => {
        if (link.parentNode != menu.parentNode) {
          menu.classList.remove("active");
        }
      });
      // add active className to current dropdown
      const dropdownMenu = link.nextElementSibling;
      if (dropdownMenu) {
        dropdownMenu.classList.toggle("active");
      }
    });
  });
}