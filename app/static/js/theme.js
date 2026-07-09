function setAbbaTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("abba-theme", theme);

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    const themeSelect = document.getElementById("setting-theme");
    if (themeSelect) {
        themeSelect.value = theme;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("abba-theme") || "light";
    setAbbaTheme(savedTheme);

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            const currentTheme = localStorage.getItem("abba-theme") || "light";
            setAbbaTheme(currentTheme === "dark" ? "light" : "dark");
        });
    }
});
