const sliders = document.querySelectorAll("[data-hero-people-slider]");

sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll("[data-hero-person-slide]"));
    const prevButton = slider.querySelector("[data-hero-slider-prev]");
    const nextButton = slider.querySelector("[data-hero-slider-next]");
    let activeIndex = 0;

    const setActiveSlide = (nextIndex) => {
        activeIndex = (nextIndex + slides.length) % slides.length;
        const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
        const nextVisibleIndex = (activeIndex + 1) % slides.length;

        slides.forEach((slide, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === prevIndex;
            const isNext = index === nextVisibleIndex;

            slide.classList.toggle("is-active", isActive);
            slide.classList.toggle("is-prev", isPrev);
            slide.classList.toggle("is-next", isNext);
            slide.setAttribute("aria-hidden", String(!isActive));
        });
    };

    prevButton?.addEventListener("click", () => setActiveSlide(activeIndex - 1));
    nextButton?.addEventListener("click", () => setActiveSlide(activeIndex + 1));
});
