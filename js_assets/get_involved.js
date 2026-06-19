// ======================================
// Door of Hope - Website JavaScript
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    // Extra CSS added by JavaScript
    const style = document.createElement("style");

    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 1s ease, transform 1s ease;
        }

        section.show {
            opacity: 1;
            transform: translateY(0);
        }

        nav a.active-page {
            font-weight: bold;
            text-decoration: underline;
        }

        section img {
            cursor: pointer;
        }

        .image-popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
        }

        .image-popup img {
            max-width: 90%;
            max-height: 85%;
            border: 5px solid white;
            border-radius: 10px;
        }
    `;

    document.head.appendChild(style);


    // Welcome Popup
    const popup = document.createElement("div");

    popup.innerHTML = `
        <strong>Welcome to Door of Hope</strong><br>
        Thank you for taking the time to learn about our mission.
    `;

    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.background = "#895f53";
    popup.style.color = "white";
    popup.style.padding = "15px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    popup.style.zIndex = "4000";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 4000);


    // Fade-in Sections
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.1
    });

    sections.forEach((section) => {
        observer.observe(section);
    });


    // Click Image to Enlarge
    const images = document.querySelectorAll("section img");

    images.forEach((img) => {

        img.addEventListener("click", () => {

            const imagePopup = document.createElement("div");
            imagePopup.classList.add("image-popup");

            const largeImage = document.createElement("img");
            largeImage.src = img.src;
            largeImage.alt = img.alt;

            imagePopup.appendChild(largeImage);
            document.body.appendChild(imagePopup);

            imagePopup.addEventListener("click", () => {
                imagePopup.remove();
            });

        });

    });


    // Highlight Current Page in Navigation
    const navLinks = document.querySelectorAll("nav a");
    let currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "") {
        currentPage = "index.html";
    }

    navLinks.forEach((link) => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active-page");
        }

    });


    // Scroll-to-Top Button
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        topBtn.style.display = "none";
        topBtn.style.position = "fixed";
        topBtn.style.bottom = "20px";
        topBtn.style.right = "20px";
        topBtn.style.padding = "10px 15px";
        topBtn.style.backgroundColor = "#895f53";
        topBtn.style.color = "white";
        topBtn.style.border = "none";
        topBtn.style.borderRadius = "8px";
        topBtn.style.cursor = "pointer";
        topBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        topBtn.style.zIndex = "4000";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});