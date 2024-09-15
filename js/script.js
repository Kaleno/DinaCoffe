// toggle kelas aktif

const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di klik akn muncul menu kesampig
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// menghilangkan popup hamburger menu dg klik sembarang tempat

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
