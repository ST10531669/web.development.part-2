
document.addEventListener("DOMContentLoaded", function () {

    // 1. Welcome message
    console.log("Welcome to Mhlongo's Royal Treatment!");

    // 2. Highlight the current page in the navigation
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop() || "home.html";

    navLinks.forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }

        link.addEventListener("click", function () {
            console.log("Navigating to " + link.textContent.trim());
        });
    });

    // 3. Mobile navigation menu
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", function () {
            const isOpen = navigation.classList.toggle("show");

            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("show");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 4. Email validation helper
    function validEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // 5. Phone number validation helper
    function validPhone(phone) {
        const digits = phone.replace(/\D/g, "");
        return digits.length >= 9 && digits.length <= 15;
    }

    // 6. Contact and enquiry form validation
    const contactForm = document.querySelector(".container form");

    if (contactForm) {
        // Make the contact form use submit even if its HTML button
        // was originally type="button".
        const contactButton = contactForm.querySelector(
            'input[type="button"], button[type="button"]'
        );

        if (contactButton) {
            contactButton.type = "submit";
        }

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstName = document.getElementById("fname");
            const lastName = document.getElementById("lname");
            const email = document.getElementById("email");

            // Your existing HTML uses id="subject", not id="Message".
            const message = document.getElementById("subject") ||
                            document.getElementById("Message");

            if (!firstName || !lastName || !email || !message) {
                alert("Please check that all required form fields are present.");
                return;
            }

            if (
                !firstName.value.trim() ||
                !lastName.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {
                alert("Please fill in all the fields before submitting.");
                return;
            }

            if (!validEmail(email.value.trim())) {
                alert("Please enter a valid email address.");
                email.focus();
                return;
            }

            alert(
                "Thank you, " + firstName.value.trim() + " " +
                lastName.value.trim() + "!\n\n" +
                "Your enquiry has been received on this page.\n" +
                "Thank you for choosing Mhlongo's Royal Treatment.\n" +
                "We look forward to treating you like royalty!"
            );

            contactForm.reset();
        });
    }

    // 7. Appointment booking form validation
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = bookingForm.querySelector(
                '[name="fullName"], [placeholder="Full Name"]'
            );
            const phone = bookingForm.querySelector(
                '[name="phone"], [placeholder="Phone Number"]'
            );
            const email = bookingForm.querySelector(
                '[name="email"], [placeholder="Email Address"]'
            );
            const date = bookingForm.querySelector('input[type="date"]');

            if (!name || !phone || !email || !date) {
                alert("Please check that your booking form has all required fields.");
                return;
            }

            if (
                !name.value.trim() ||
                !phone.value.trim() ||
                !email.value.trim() ||
                !date.value
            ) {
                alert("Please complete your name, phone, email and preferred date.");
                return;
            }

            if (!validPhone(phone.value.trim())) {
                alert("Please enter a valid phone number.");
                phone.focus();
                return;
            }

            if (!validEmail(email.value.trim())) {
                alert("Please enter a valid email address.");
                email.focus();
                return;
            }

            // Prevent booking dates in the past.
            const today = new Date();
            const localToday = new Date(
                today.getTime() - today.getTimezoneOffset() * 60000
            ).toISOString().split("T")[0];

            if (date.value < localToday) {
                alert("Please select today or a future date.");
                date.focus();
                return;
            }

            alert(
                "Thank you, " + name.value.trim() + "!\n\n" +
                "Your appointment request has been received on this page.\n" +
                "Preferred date: " + date.value + "\n\n" +
                "We look forward to treating you like royalty!"
            );

            bookingForm.reset();
        });
    }

    // 8. Back-to-top button
    const topButton = document.getElementById("backToTop");

    if (topButton) {
        function updateTopButton() {
            topButton.style.display =
                window.scrollY > 300 ? "block" : "none";
        }

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        window.addEventListener("scroll", updateTopButton);
        updateTopButton();
    }

    // 9. FAQ accordion
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(function (button) {
        button.setAttribute("aria-expanded", "false");

        button.addEventListener("click", function () {
            const answer = button.nextElementSibling;
            if (!answer) return;

            const isOpen = button.getAttribute("aria-expanded") === "true";

            button.setAttribute("aria-expanded", String(!isOpen));
            answer.hidden = isOpen;
        });
    });

    // 10. Gallery lightbox
    const galleryImages = document.querySelectorAll(".lightbox-image");

    if (galleryImages.length > 0) {
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.setAttribute("role", "dialog");
        lightbox.setAttribute("aria-modal", "true");
        lightbox.setAttribute("aria-label", "Enlarged gallery image");
        lightbox.hidden = true;

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "lightbox-close";
        closeButton.textContent = "×";
        closeButton.setAttribute("aria-label", "Close image");

        const largeImage = document.createElement("img");
        largeImage.alt = "";

        lightbox.append(closeButton, largeImage);
        document.body.appendChild(lightbox);

        let previousFocus = null;

        function closeLightbox() {
            lightbox.hidden = true;
            largeImage.removeAttribute("src");

            if (previousFocus) {
                previousFocus.focus();
            }
        }

        galleryImages.forEach(function (img) {
            img.tabIndex = 0;
            img.setAttribute("role", "button");
            img.setAttribute(
                "aria-label",
                "Enlarge image: " + img.alt
            );

            function openLightbox() {
                previousFocus = img;
                largeImage.src = img.src;
                largeImage.alt = img.alt;
                lightbox.hidden = false;
                closeButton.focus();
            }

            img.addEventListener("click", openLightbox);

            img.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openLightbox();
                }
            });
        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !lightbox.hidden) {
                closeLightbox();
            }
        });
    }

    // 11. Update the copyright year automatically
    document.querySelectorAll(".current-year").forEach(function (year) {
        year.textContent = new Date().getFullYear();
    });

    // 12. Simple scroll-reveal animation
    const revealElements = document.querySelectorAll(
        ".card, .product-card, .featured-content, .additional-info"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-image");
    const modal = document.getElementById("imageModal");
    const enlargedImage = document.getElementById("enlargedImage");
    const caption = document.getElementById("imageCaption");
    const closeButton = document.querySelector(".close-modal");

    if (!modal || !enlargedImage || !closeButton) return;

    let previousFocus = null;

    function openImage(image) {
        previousFocus = image;
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;
        caption.textContent = image.alt;

        modal.classList.add("show");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        closeButton.focus();
    }

    function closeImage() {
        modal.classList.remove("show");
        modal.setAttribute("aria-hidden", "true");
        enlargedImage.src = "";
        document.body.style.overflow = "";

        if (previousFocus) {
            previousFocus.focus();
        }
    }

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            openImage(image);
        });

        image.setAttribute("tabindex", "0");
        image.setAttribute("role", "button");
        image.setAttribute("aria-label", "Enlarge " + image.alt);

        image.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openImage(image);
            }
        });
    });

    closeButton.addEventListener("click", closeImage);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeImage();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("show")) {
            closeImage();
        }
    });
});
