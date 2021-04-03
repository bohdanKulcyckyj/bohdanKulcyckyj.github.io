const header = document.querySelector("#header");
const landing = document.querySelector("#landing");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const contact = document.querySelector("#contact");

const landingLink = document.querySelector('.nav-link[href="#landing"]');
const aboutLink = document.querySelector('.nav-link[href="#about"]');
const projectsLink = document.querySelector('.nav-link[href="#projects"]');
const contactLink = document.querySelector('.nav-link[href="#contact"]');

let groupedLinks = [landingLink, aboutLink, projectsLink, contactLink];
let bruh = 80;
window.addEventListener("scroll", () => {
    let windo = window.pageYOffset;
    console.log(windo);
    header.classList.toggle("scrolled-navbar", window.scrollY > 0);
    if((about.offsetTop - bruh) <= windo && (projects.offsetTop - bruh) > windo) {
        console.log("About");
        chooseActiveNavLink(aboutLink);
    }  else if((projects.offsetTop - bruh) <= windo && (contact.offsetTop -bruh) > windo) {
        console.log("Projects");
        chooseActiveNavLink(projectsLink);
    } else if((contact.offsetTop - bruh) <= windo) {
        console.log("Contact");
        chooseActiveNavLink(contactLink);
    } else {
        console.log("Home");
        chooseActiveNavLink(landingLink);
    }
});

const chooseActiveNavLink = (activeLink) => {
    activeLink.classList.add("active-link");
    groupedLinks.filter(link => activeLink !== link).forEach(anchor => {
        anchor.classList.remove("active-link");
    });
}

