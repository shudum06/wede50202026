// Professional Welcome Popup
window.addEventListener("load", () => {

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
});


// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});


// Image click-to-enlarge
const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        img.classList.toggle("zoomed");
    });
});


// Highlight current page in navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    if (link.textContent.trim() === "About Us") {
        link.classList.add("active-page");
    }
});

    
// Scroll-to-top button
const topBtn = document.getElementById("topBtn");

if (topBtn) {

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