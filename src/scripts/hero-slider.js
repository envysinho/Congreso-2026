const sliders = document.querySelectorAll("[data-hero-people-slider]");

sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll("[data-hero-person-slide]"));
    const dots = Array.from(slider.querySelectorAll("[data-hero-slider-dot]"));
    let activeIndex = 0;
    let isPointerInside = false;

    if (slides.length === 0) {
        return;
    }

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

        dots.forEach((dot, index) => {
            const isActive = index === activeIndex;

            dot.classList.toggle("is-active", isActive);
            dot.setAttribute("aria-current", String(isActive));
        });
    };

    slides.forEach((slide) => {
        slide.addEventListener("click", () => {
            if (slide.classList.contains("is-prev")) {
                setActiveSlide(activeIndex - 1);
            }

            if (slide.classList.contains("is-next")) {
                setActiveSlide(activeIndex + 1);
            }
        });
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            const nextIndex = Number(dot.dataset.heroSliderIndex);

            if (Number.isInteger(nextIndex)) {
                setActiveSlide(nextIndex);
            }
        });
    });

    slider.addEventListener("pointerenter", () => {
        isPointerInside = true;
    });

    slider.addEventListener("pointerleave", () => {
        isPointerInside = false;
    });

    document.addEventListener("keydown", (event) => {
        const isSliderFocused = slider.contains(document.activeElement);

        if (!isPointerInside && !isSliderFocused) {
            return;
        }

        if (event.key === "ArrowLeft") {
            event.preventDefault();
            setActiveSlide(activeIndex - 1);
        }

        if (event.key === "ArrowRight") {
            event.preventDefault();
            setActiveSlide(activeIndex + 1);
        }
    });
});
