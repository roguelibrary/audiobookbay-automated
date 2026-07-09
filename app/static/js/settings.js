document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("setting-theme");
    const languageSelect = document.getElementById("setting-language");
    const bitrateSelect = document.getElementById("setting-bitrate");
    const formatSelect = document.getElementById("setting-format");
    const message = document.getElementById("settings-message");
    const refreshSelect = document.getElementById("setting-refresh");

    themeSelect.value = localStorage.getItem("abba-theme") || "light";
    languageSelect.value = localStorage.getItem("abba-default-language") || "";
    bitrateSelect.value = localStorage.getItem("abba-default-bitrate") || "";
    formatSelect.value = localStorage.getItem("abba-default-format") || "";
    refreshSelect.value = localStorage.getItem("abba-status-refresh-ms") || "5000";

    themeSelect.addEventListener("change", function () {
        setAbbaTheme(themeSelect.value);
        message.textContent = "Theme updated.";
    });

    document.getElementById("save-settings").addEventListener("click", function () {
        setAbbaTheme(themeSelect.value);

        localStorage.setItem("abba-default-language", languageSelect.value);
        localStorage.setItem("abba-default-bitrate", bitrateSelect.value);
        localStorage.setItem("abba-default-format", formatSelect.value);
        localStorage.setItem("abba-status-refresh-ms", refreshSelect.value);

        message.textContent = "Settings saved.";
    });

    document.getElementById("reset-settings").addEventListener("click", function () {
        setAbbaTheme("light");

        themeSelect.value = "light";
        languageSelect.value = "";
        bitrateSelect.value = "";
        formatSelect.value = "";
        refreshSelect.value = "5000";

        localStorage.removeItem("abba-default-language");
        localStorage.removeItem("abba-default-bitrate");
        localStorage.removeItem("abba-default-format");
        localStorage.removeItem("abba-status-refresh-ms");

        message.textContent = "Settings reset to defaults.";
    });
});
