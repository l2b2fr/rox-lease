document.addEventListener("DOMContentLoaded", function () {
    const hoverColumns = document.querySelectorAll(".hover-col");
    const mainColumn = document.querySelector(".col-md-6");
    const backgroundOverlay = document.querySelector(".bg-ovl-col-main");
    const capitalHeader = document.querySelector(".custom-header-capital");
    const capitalContainer = document.querySelector(".custom-container-capital");
    const shoppingMallHeader = document.querySelector(".custom-header-shopping-mall");
    const shoppingMallContainer = document.querySelector(".custom-container-shopping-mall");

    hoverColumns.forEach(column => {
        column.addEventListener("mouseenter", function () {
            if (!mainColumn.matches(":hover")) {
                mainColumn.style.flex = "1"; 
                backgroundOverlay.classList.add("bg-overlay-col-main");
                capitalHeader.style.display = "flex";
                capitalContainer.style.display = "none";
                shoppingMallHeader.style.display = "none";
                shoppingMallContainer.style.display = "flex";
            }
        });

        column.addEventListener("mouseleave", function () {
            if (!mainColumn.matches(":hover")) {
                mainColumn.style.flex = "2";
                backgroundOverlay.classList.remove("bg-overlay-col-main");
                capitalHeader.style.display = "none";
                capitalContainer.style.display = "flex";
                shoppingMallHeader.style.display = "flex";
                shoppingMallContainer.style.display = "none";
            }
        });
    });

    mainColumn.addEventListener("mouseenter", function () {
        mainColumn.style.flex = "2";
        backgroundOverlay.classList.remove("bg-overlay-col-main");
        capitalHeader.style.display = "none";
        capitalContainer.style.display = "flex";
        shoppingMallHeader.style.display = "flex";
        shoppingMallContainer.style.display = "none";
    });
});


// MODAL
const moModalBtn = document.querySelector(".btn-mo-modal");
const dongModalBtn = document.querySelector(".btn-dong-modal");
const nenMo = document.querySelector(".overlay");

moModalBtn.addEventListener("click", () => {
    nenMo.classList.add("show");
});

dongModalBtn.addEventListener("click", () => {
    nenMo.classList.remove("show");
});

nenMo.addEventListener("click", (e) => {
    if (e.target === nenMo) {
        nenMo.classList.remove("show");
    }
});