/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
let sections;
/**
 * End Global Variables
 */

/* Helper Functions
*/
const smoothScroll = (liNav, section) => {
    liNav.addEventListener("click", () => {
        section.scrollIntoView({ behavior: "smooth" });
    });
}

/**
 Main Functions
*/
const buildNav = () => {
    sections = document.getElementsByTagName("section");

    for (const section of sections) {
        const aNav = document.createElement("a");
        aNav.textContent = section.getAttribute("data-nav");
        aNav.classList.add("menu__link");

        const liNav = document.createElement("li");
        liNav.appendChild(aNav);


        // Scroll to section on link click
        smoothScroll(liNav, section);

        const ulNav = document.getElementById("navbar__list")
        ulNav.appendChild(liNav);
    }
}

// Build menu 
buildNav();

// Add class 'active' to section when near top of viewport
const classActive = () => {
    for (const section of sections) {
        let top = section.getBoundingClientRect().top;

        if (top >= 0 && top <= 300) {
            const activeSection = section.classList.add("activeClass");
            // highlight menu when section is active
            let menuLinks = document.querySelectorAll("a");
            for (const link of menuLinks) {
                if (link.textContent === section.getAttribute("data-nav")) {
                    link.classList.add("activeClass");
                } else
                    link.classList.remove("activeClass");
            }
            //
            return section;
        }
        else {
            section.classList.remove("activeClass");
        }
    }
};

/* Event Listeners */

// Set sections as active
document.addEventListener("scroll", () => {
    classActive()
});

/* Back to top button */
const topButton = document.getElementById("toTop");
// show only when user scrolls below fold of the page.
window.onscroll = function scrollFunction() {
    if (document.documentElement.scrollTop > 800) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
//scroll to top
const topFunction = () =>
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
