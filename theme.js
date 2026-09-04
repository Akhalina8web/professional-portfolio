const themeButtons = document.querySelectorAll(".theme-btn");

const savedTheme = localStorage.getItem("portfolioTheme") || "sage";

document.documentElement.setAttribute("data-theme", savedTheme);

function updateActiveButton(theme) {
    themeButtons.forEach((button) => {
        button.classList.toggle(
            "active",
            button.dataset.theme === theme
        );
    });
}

updateActiveButton(savedTheme);

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedTheme = button.dataset.theme;

        document.documentElement.setAttribute(
            "data-theme",
            selectedTheme
        );

        localStorage.setItem(
            "portfolioTheme",
            selectedTheme
        );

        updateActiveButton(selectedTheme);
    });
});