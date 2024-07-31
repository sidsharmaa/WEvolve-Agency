const aboutUsButton = document.querySelector('.about-me-link'); 
const aboutUsSection = document.querySelector('.div2');

const homeButton = document.querySelector('.home-link'); 
const homeSection = document.querySelector('.div1');

const servicesButton = document.querySelector('.services-link');
const servicesSection = document.querySelector('.div3');

const contactButton = document.querySelector('.contact-link');
const contactSection = document.querySelector('.div4');

aboutUsButton.addEventListener('click', () => {
  aboutUsSection.scrollIntoView({ behavior: 'smooth' });
});

homeButton.addEventListener('click', () => {
  homeSection.scrollIntoView({ behavior: 'smooth' });
});

servicesButton.addEventListener('click', () => {
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});

contactButton.addEventListener('click', () => {
  contactButton.scrollIntoView({ behavior: 'smooth' });
});