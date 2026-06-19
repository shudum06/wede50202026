// ======================================
// Door of Hope - Website JavaScript
// ======================================

document.addEventListener("DOMContentLoaded", () => {

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
    popup.style.zIndex = "1000";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 4000);


    // Fade-in Sections on Scroll
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach((section) => {
        observer.observe(section);
    });


    // Image Click-to-Enlarge
    const images = document.querySelectorAll("section img");

    images.forEach((img) => {

        img.style.cursor = "pointer";
        img.style.transition = "transform 0.3s ease";
        img.style.position = "relative";

        img.addEventListener("click", () => {

            if (img.classList.contains("zoomed")) {
                img.classList.remove("zoomed");
                img.style.transform = "scale(1)";
                img.style.zIndex = "1";
            } else {
                img.classList.add("zoomed");
                img.style.transform = "scale(1.15)";
                img.style.zIndex = "10";
            }

        });

    });


    // Highlight Current Page in Navigation
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach((link) => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage || currentPage === "" && linkPage === "index.html") {
            link.style.fontWeight = "bold";
            link.style.textDecoration = "underline";
            link.style.color = "#895f53";
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