/* =========================================================
   COMPONENT LOADER
========================================================= */

async function loadComponent(id, file) {

    const element = document.getElementById(id);

    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        element.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

    }
}


/* =========================================================
   MOBILE NAV
========================================================= */

function toggleMobileNav() {

    const nav = document.getElementById("mobileNav");

    if (!nav) return;

    nav.classList.toggle("is-open");
}


/* Close mobile navigation after clicking */

document.addEventListener("click", event => {

    const link = event.target.closest(".mobile-nav a");

    if (!link) return;

    const nav = document.getElementById("mobileNav");

    if (nav) {
        nav.classList.remove("is-open");
    }

});


/* =========================================================
   NEWSLETTER
========================================================= */

function subscribe(event) {

    event.preventDefault();

    const form = event.target;

    const input = form.querySelector("input");

    if (!input || !input.value.trim()) return;

    alert(
        "You're on the list. Welcome to Kindly."
    );

    form.reset();

}


/* =========================================================
   ARTICLE NAVIGATION
========================================================= */

document.addEventListener("click", event => {

    const link = event.target.closest('a[href="#article"]');

    if (!link) return;

    const article = document.querySelector("#article");

    if (!article) return;

    event.preventDefault();

    article.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================================
   HEADER SHADOW
========================================================= */

window.addEventListener("scroll", () => {

    const header = document.querySelector(".site-header");

    if (!header) return;

    if (window.scrollY > 10) {

        header.classList.add("is-scrolled");

    } else {

        header.classList.remove("is-scrolled");

    }

});


/* =========================================================
   LOAD GLOBAL COMPONENTS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadComponent(
        "site-header",
        "components/header.html"
    );

    loadComponent(
        "site-footer",
        "components/footer.html"
    );

});
