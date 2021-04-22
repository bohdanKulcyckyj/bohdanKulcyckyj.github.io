const header = document.querySelector("#header");
const landing = document.querySelector("#landing");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

const landingLink = document.querySelector('#landing-link');
const aboutLink = document.querySelector('#about-link');
const projectsLink = document.querySelector('#projects-link');
const contactLink = document.querySelector('#contact-link');
let groupedLinks = [landingLink, aboutLink, projectsLink, contactLink];

const iconsContainer = document.querySelector("#about-skills");
const icons = ['html.svg', 'css.svg', 'javascript.png', 'sass.svg', 'react.svg', 'nodejs.png', 'git.svg', 'figma.png'];

const element = document.querySelector("#landing-p1");
const printedString = "I am Bohdan";
const printer = "<span>|</span>";
const delay = 250;
let quantity = 1;

let additionalOffset = 400;

const chooseActiveNavLink = (activeLink) => {
    activeLink.classList.add("active-link");
    groupedLinks.filter(link => activeLink !== link).forEach(anchor => {
        anchor.classList.remove("active-link");
    });
}

const printString = () => {
    element.innerHTML = printedString.slice(0, quantity) + printer;
    quantity++;
    console.log(quantity);
    if(quantity > printedString.length) {
        element.innerHTML = printedString.slice(0, quantity);
        return;
    }
    setTimeout(printString, delay);
    return;
}

const addIcons = () => {
    for(let i in icons) {
        let row = `<div class="icon-container"><img src="./assets/techs/${icons[i]}" alt="${icons[i]}" title="${icons[i].slice(0, icons[i].length - 4)}" /></div>`;
        iconsContainer.innerHTML += row;
    }
}

addIcons();

const navigateSmooth = (id) => {
    let element = document.querySelector(id);
    if(id === "#landing") {
        window.scrollTo({top: element.offsetTop, left: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top: element.offsetTop  - 80, left: 0, behavior: 'smooth'});
    }
}

const closeMenu = () => {
    if(window.innerWidth <= 800) {
        let nav = document.querySelector('#navigation');
        nav.style.top = '-1000%';
        nav.style.right = '-1000%';
        return;
    }
    return;
}

//event listeners
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

document.addEventListener('DOMContentLoaded', () => {
    printString();
});

document.querySelector("#logo").addEventListener("click", () => {
    window.scrollTo({top : 0, behavior : 'smooth'});
});

document.querySelector('#menu-btn').addEventListener("click", () => {
    let nav = document.querySelector('#navigation');
    console.log(nav);
    nav.style.top = '0';
    nav.style.right = '0';
});

document.querySelector('#close-menu-btn').addEventListener("click", () => {
    closeMenu();
});




