/* =====================================================
   1. TYPING EFFECT
===================================================== */

const typingText = document.getElementById("typing-text");

if (typingText) {

    const roles = [
        "Full Stack Developer",
        "Python Developer",
        "AI/ML Enthusiast",
        "Web Developer"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;


    function typingEffect() {

        const currentRole = roles[roleIndex];


        // Text typing
        if (!isDeleting) {

            typingText.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

        }

        // Text deleting
        else {

            typingText.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

        }


        // Normal typing speed
        let typingSpeed = 100;


        // Delete speed
        if (isDeleting) {
            typingSpeed = 50;
        }


        // Complete word typed
        if (
            !isDeleting &&
            characterIndex === currentRole.length
        ) {

            typingSpeed = 1500;

            isDeleting = true;
        }


        // Complete word deleted
        else if (
            isDeleting &&
            characterIndex === 0
        ) {

            isDeleting = false;

            roleIndex++;


            // Start again after last role
            if (roleIndex === roles.length) {
                roleIndex = 0;
            }


            typingSpeed = 500;
        }


        setTimeout(
            typingEffect,
            typingSpeed
        );
    }


    // Start typing animation
    typingEffect();
}


/* =====================================================
   2.CONTACT FORM → GOOGLE SHEET
===================================================== */

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            // Normal form submit / page refresh stop
            event.preventDefault();


            const submitButton =
                contactForm.querySelector(".contact-submit-btn");


            // Form values
            const formData = {

                name:
                    document.getElementById("name").value,

                email:
                    document.getElementById("email").value,

                subject:
                    document.getElementById("subject").value,

                message:
                    document.getElementById("message").value

            };


            // Button loading state
            submitButton.textContent = "Sending...";

            submitButton.disabled = true;


            try {

                await fetch(
                    "https://script.google.com/macros/s/AKfycbyGrfO6wJnuCRvRozLPU7a8bcJnqxNs5fl4dA4php_3T5fQYEuoDeN3URsRip7XE8_r/exec",
                    {

                        method: "POST",

                        mode: "no-cors",

                        headers: {
                            "Content-Type":
                                "text/plain;charset=utf-8"
                        },

                        body:
                            JSON.stringify(formData)

                    }
                );


                alert(
                    "Thank you! Your message has been sent successfully."
                );


                // Clear fields
                contactForm.reset();

            }


            catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );


                alert(
                    "Something went wrong. Please try again."
                );

            }


            // Button normal
            submitButton.textContent =
                "Send Message";

            submitButton.disabled = false;

        }
    );

}



/* =====================================================
   3. MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            // Open / Close Menu
            navLinks.classList.toggle("show");


            // Change hamburger icon
            if (navLinks.classList.contains("show")) {

                menuToggle.textContent = "✕";

                menuToggle.setAttribute(
                    "aria-label",
                    "Close menu"
                );

            }

            else {

                menuToggle.textContent = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

            }

        }
    );


    /* Close menu after clicking link */

    const mobileLinks =
        navLinks.querySelectorAll("a");


    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("show");

                menuToggle.textContent = "☰";

            }
        );

    });

}



/* =====================================================
   4. ACTIVE NAVBAR LINK
===================================================== */

const currentPage =
    window.location.pathname.split("/").pop()
    || "index.html";


const navbarLinks =
    document.querySelectorAll(".nav-links a");


navbarLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});

/* =========================
   CURRENT YEAR
========================= */

const currentYear =
    document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}

/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;


        if (elementTop < windowHeight - 80) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads
revealOnScroll();

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const header =
    document.querySelector(".header");


if (header) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }
    );

}s