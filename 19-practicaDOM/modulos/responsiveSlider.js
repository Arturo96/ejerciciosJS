const d = document;

export const responsiveSlider = () => {
    let initialSlide = d.querySelector(".slider-slide"),
        lastSlide = d.querySelector(".slider-slide:last-child"),
        prev = d.getElementById("prev"),
        next = d.getElementById("next");

    initialSlide.classList.add("active");

    next.addEventListener("click", e => {
        e.preventDefault();
        let currentSlide = d.querySelector(".active"),
            nextSlide = currentSlide.nextElementSibling;
        currentSlide.classList.remove("active");
        if(!nextSlide) nextSlide = initialSlide;
        nextSlide.classList.add("active");
    })

    prev.addEventListener("click", e => {
        e.preventDefault();
        let currentSlide = d.querySelector(".active"),
            prevSlide = currentSlide.previousElementSibling;
        currentSlide.classList.remove("active");
        if(!prevSlide) prevSlide = lastSlide;
        prevSlide.classList.add("active");
    })
}