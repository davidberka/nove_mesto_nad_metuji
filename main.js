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

function matchesLinksHandler() {
  const matchesLinks = document.querySelectorAll('.matches_links li');

  matchesLinks.forEach((link) => {
    link.addEventListener("click", function() {
      let current = document.querySelector(".matches_links li.selected");
      current.className = current.className.replace("selected", "");
      this.classList.add("selected");

      linkId = link.getAttribute('data-id');

      let currentContainer = document.querySelector(".matches_items_container.selected");
      currentContainer.className = currentContainer.className.replace("selected", "");
      document.querySelector(`.matches_items_container[id="${linkId}"]`)?.classList.add('selected');
    });
  });
}

matchesLinksHandler();

function discussionHandler() {
  const discussionAdd = document.querySelector(".discussion_add");
  const discussionClose = document.querySelector(".discussion_popup .close_btn")
  
  discussionAdd.addEventListener('click', () => {
    document.querySelector('.discussion_popup_bg').classList.add('active')
    document.querySelector('.discussion_popup').classList.add('active')
  })
  
  discussionClose.addEventListener('click', () => {
    document.querySelector('.discussion_popup_bg').classList.remove('active')
    document.querySelector('.discussion_popup').classList.remove('active')
  })
}

discussionHandler()