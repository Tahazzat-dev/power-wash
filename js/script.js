'use strict';
const navbar = document.querySelector('.navbar');
const responsiveNav = document.querySelector('.responsive-navbar');
const responsiveNavbar = document.querySelector('.responsive-navbar');
const resposniveNavUl = document.querySelector('.responsive-nav-items ul');
const burgerMenu = document.querySelector('.burger-menu');
const navItems = document.querySelector('.responsive-nav-items');
const logo = document.getElementById('nav-logo');
const accordionLabels = document.querySelectorAll('.accordion label');
const slider = document.getElementById('slider');
const secondImg = document.getElementById('second-img');
const caseStudyBtns = document.querySelectorAll(
  '.case-study-btn-container button',
);
const excellenceBtns = document.querySelectorAll(
  '.excellence-btn-container button',
);

function updateNavOnScroll(scrollY) {
  if (scrollY > 350) applyFixedNavStyles();
  else resetNavStyles();
}

function applyFixedNavStyles() {
  if (navbar && logo) {
    logo.setAttribute('width', '105px');
    logo.setAttribute('height', '108px');
    navbar.classList.add('scroll-nav')
  }
}

function resetNavStyles() {
  if (navbar && logo) {
    logo.setAttribute('width', '229px');
    logo.setAttribute('height', '234px')
    navbar.classList.remove('scroll-nav')
    ;
  }
}
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  updateNavOnScroll(scrollY);
});

// Responsive nav styles

let showNavList = false;

function updateResNavScroll(scrollY) {
  if (scrollY > 300) {
    applyResNavStyles();
  } else {
    resetResNavStyles();
  }
}

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  updateResNavScroll(scrollY);
});

function applyResNavStyles() {
  responsiveNav.style.position = 'fixed';
}

function resetResNavStyles() {
  responsiveNav.style.position = 'absolute';
}

function navListController() {
  if (showNavList) {
    navItems.style.top = '60px';
    responsiveNav.style.background = '#050D04';
  } else {
    navItems.style.top = '-300px';
  }
}

navListController();
burgerMenu.addEventListener('click', function () {
  showNavList = !showNavList;
  navListController();
});

accordionLabels.forEach((label) => {
  const labelImg = label.querySelector('span img');
  label.addEventListener('click', function () {
    accordionLabels.forEach((lbl) => {
      const lblImg = lbl.querySelector('span img');
      lbl.style.background = '#14213D1A';
      lbl.style.color = '#14213D';
      lblImg.style.filter = 'none';
      lblImg.style.transform = 'rotate(360deg)';
    });

    label.style.background = '#14213D';
    label.style.color = '#ffffff';
    labelImg.style.filter = 'brightness(0) invert(1)';
    labelImg.style.transform = 'rotate(180deg)';
  });
});

if (slider) {
  slider.addEventListener('input', function () {
    const sliderValue = slider.value;
    secondImg.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`;
  });
}
excellenceBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    excellenceBtns.forEach((btn) => {
      btn.classList.remove('active');
    });
    btn.classList.add('active');
  });
});

caseStudyBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    caseStudyBtns.forEach((btn) => {
      btn.classList.remove('clicked');
    });

    btn.classList.add('clicked');
  });
});
