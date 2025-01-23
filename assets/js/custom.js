document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".menu-item-has-children");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (event) => {
            event.preventDefault();
            dropdown.classList.toggle("open");
        });
    });
});