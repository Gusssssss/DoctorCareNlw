window.addEventListener("scroll", onScroll);


onScroll();
function onScroll(){
   showNavOnScroll();
   showBackToTopButtonOnScroll();
   activateMenuSection(home);
   activateMenuSection(services);
   activateMenuSection(about);
   activateMenuSection(contact);
};

function activateMenuSection(section){
    const targetLine = scrollY + (innerHeight / 2);
    const sectionTop  = section.offsetTop;
    const sectionheight = section.offsetHeight;

    const sectionTopPassedLine = sectionTop <= targetLine;

    const sectionEndsAt = sectionTop + sectionheight;

    const sectionEndPassedLine = sectionEndsAt <= targetLine;

    const sectionBoundaries = sectionTopPassedLine && !sectionEndPassedLine;

    const sectionId = section.getAttribute("id")

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove("active");
    if (sectionBoundaries) {
        menuElement.classList.add("active");
    };
    
}

function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add("scroll");
    } else{
        navigation.classList.remove("scroll");
    };
};

function showBackToTopButtonOnScroll(){
    if (scrollY > 500){
        backToTopButton.classList.add("show");
    } else{
        backToTopButton.classList.remove("show");
    };
};

function openMenu(){
    document.body.classList.add("menu-expanded");
}

function closeMenu(){
    document.body.classList.remove("menu-expanded");
};

ScrollReveal({
    origin: "top",
    distance: "200px",
    duration: 1700,
}).reveal(`#home,
    #home img,
    #home .stats,
    #home .stats .stat,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #about .content img,
    #contact header,
    #contact .content ul,
    #contact .content .button,
    #contact .col-b img,
    footer,
    footer .col-a .logo,
    footer .col-a p,
    footer .col-b .social-links`);