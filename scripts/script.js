function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //to target all menu links of hamburger menu
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}