//Page Sections
const header = document.querySelector("#header");
const landing = document.querySelector("#landing");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");
//Section Links
const landingLink = document.querySelector('#landing-link');
const aboutLink = document.querySelector('#about-link');
const projectsLink = document.querySelector('#projects-link');
const contactLink = document.querySelector('#contact-link');
const groupedLinks = [landingLink, aboutLink, projectsLink, contactLink];

const iconsContainer = document.querySelector("#about-skills");
const icons = ['html.svg', 'css.svg', 'javascript.png', 'sass.svg', 'react.svg', 'nodejs.png', 'git.svg', 'figma.png'];

const revealPoint = window.innerWidth > 800 ? 100 : 0;
//For SVG Animations
const light = document.querySelector("#light");
let isShine = 0;
const lines = document.querySelectorAll(".line");
let animationDelay = 0;
//For Smooth Scroll
const additionalOffset = 400;
//For Mobile Menu
const menuBtn = document.querySelector("#menu-btn-container");
const nav = document.querySelector('#navigation');
let menuOpen = false;
//Switch Loading Screen and Landing Page
function handlePageOnload() {
    let source = window.getComputedStyle(landing).backgroundImage;
    console.log(source, "source");
    let url = source.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
    console.log(url, "image url");

    let img = new Image();
    img.onload = function() {
        if(document.getElementById('loading-screen')) document.getElementById('loading-screen').remove();
    }
    img.src = url;
    if (img.complete) img.onload();
}
handlePageOnload();
//Lazy adding icons
const addIcons = () => {
    for(let i in icons) {
        let row = `<div class="icon-container"><img src="./assets/techs/${icons[i]}" alt="${icons[i]}" title="${icons[i].slice(0, icons[i].length - 4)}" /></div>`;
        iconsContainer.innerHTML += row;
    }
}
addIcons();
//Selects Active Link
const chooseActiveNavLink = (activeLink) => {
    activeLink.classList.add("active-link");
    groupedLinks.filter(link => activeLink !== link).forEach(anchor => {
        anchor.classList.remove("active-link");
    });
}
//Smooth Scrolling
const navigateSmooth = (id) => {
    let element = document.querySelector(id);
    if(id === "#landing") {
        window.scrollTo({top: element.offsetTop, left: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top: element.offsetTop  - 80, left: 0, behavior: 'smooth'});
    }
}
//Mobile menu toggle
const handleMobileMenu = () => {
    const nav = document.querySelector('#navigation');
    if(window.innerWidth <= 800) {
        if(!menuOpen) {
            menuBtn.classList.add("open");
            nav.style.top = '0';
            nav.style.right = '0';
            menuOpen = true;
        } else {
            nav.style.top = '-1000%';
            menuOpen = false;
            menuBtn.classList.remove("open");
        }
        return;
    }
    return;
}
/*--------------------------------------------*/
/*--------------EVENT-LISTENERS---------------*/
/*--------------------------------------------*/
//Scroll Spy
window.addEventListener("scroll", () => {
    let windo = window.pageYOffset;
    header.classList.toggle("scrolled-navbar", window.scrollY > 0);
    if((about.offsetTop - additionalOffset) <= windo && (projects.offsetTop - additionalOffset) > windo) {
        console.log("About");
        chooseActiveNavLink(aboutLink);
    }  else if((projects.offsetTop - additionalOffset) <= windo && (contact.offsetTop -additionalOffset) > windo) {
        console.log("Projects");
        chooseActiveNavLink(projectsLink);
    } else if((contact.offsetTop - additionalOffset) <= windo) {
        console.log("Contact");
        chooseActiveNavLink(contactLink);
    } else {
        console.log("Home");
        chooseActiveNavLink(landingLink);
    }
});
//Page Content Animation
window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for(let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("reveal-active");
        } else {
            reveals[i].classList.remove("reveal-active");
        }
    }
});

document.querySelector("#logo").addEventListener("click", () => {
    window.scrollTo({top : 0, behavior : 'smooth'});
});

menuBtn.addEventListener("click", handleMobileMenu);

document.querySelector("#logo").addEventListener("click", () => {
    location.realod();
    chooseActiveNavLink(landingLink);
})
/*--------------------------------------------*/
/*---------------SVG-ANIMATIONS---------------*/
/*--------------------------------------------*/
document.querySelector("#lamp").addEventListener("click", () => {
    light.style.opacity = isShine;
    if(isShine) {
      isShine = 0;
    } else {
      isShine = 1;
    }
  });

function handleAnimations() {
    const mySVG = document.querySelector("#pc-svg");
    let positionFromTop = mySVG.getBoundingClientRect().top;
    let triggered = false;

    if(positionFromTop < window.innerHeight - (revealPoint + 300)) {
        triggered = true;
    }
    if(triggered) {
        light.style.opacity = 1;
        light.style.animation = "turn-on-light 1s 1";

        lines.forEach(_line => _line.style.opacity = 1);

        gsap.from(".line", {width: 0, opacity: 0, duration: 0.4, stagger: 0.3});
      
        gsap.from("#leaf", {duration: 0.5, x: 5});
        gsap.from("#leaf_2", {duration: 0.5, x: 5});
        gsap.from("#leaf_3", {duration: 0.5, x: -5});
        gsap.from("#leaf_4", {duration: 0.5, x: -5});
        gsap.from("#leaf_5", {duration: 0.5, x: 5});
        gsap.from("#leaf_6", {duration: 0.5, x: -5});
        gsap.from("#leaf_7", {duration: 0.5, x: 5});
        
        document.querySelector("#terminal").style.opacity = 1;
        document.querySelector("#app-in-production").style.opacity = 1;
        
        gsap.from("#terminal", {x: 10, y: 15, duration: 0.5, opacity: 0, delay: 4});
        gsap.from("#app-in-production", {x: 10, y: 10, duration: 0.5, opacity: 0, delay: 4.5});
    }
    if(triggered) {
        window.removeEventListener("scroll", handleAnimations);
    }
}
window.addEventListener("scroll", handleAnimations);
/*--------------------------------------------*/
/*---------ADDITIONAL-GSAP-ANIMATION----------*/
/*--------------------------------------------*/
//Landing Text Animation
gsap.from("#landing-text", {x: -100, opacity: 0, duration: 1.5});