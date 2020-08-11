const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
}

// better to make and function to call functions when they are multiples
const app = () => {
    navSlide();
};

app();