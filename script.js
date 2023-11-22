document.addEventListener("DOMContentLoaded", function () {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDarkMode ? "dark" : "light");

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const currentTheme = document.body.classList.contains("dark") ? "light" : "dark";
            setTheme(currentTheme);
        });
    }

    // Smooth scroll Buat Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function setTheme(theme) {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
}
