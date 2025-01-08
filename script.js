const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', handleScroll);

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = '#444';  // Darker background on hover
  });

  item.addEventListener('mouseout', () => {
    if (window.scrollY <= 50) {
      navbar.style.backgroundColor = '#333';  // Reset background color
    } else {
      navbar.style.backgroundColor = '#222';  // If scrolled, keep the dark background
    }
  });
});