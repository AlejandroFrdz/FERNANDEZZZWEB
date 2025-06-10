document.addEventListener("DOMContentLoaded", () => {
    const flipContainers = document.querySelectorAll(".flip-container");

    const overlay = document.createElement("div");
    overlay.id = "fullscreen-overlay";
    document.body.appendChild(overlay);

    flipContainers.forEach(container => {
        const flipInner = container.querySelector(".flip-inner");
        const img = container.querySelector(".flip-front img");

        let clickState = 0; // 0: normal, 1: fullscreen, 2: flipped
        let carouselInterval = null;
        let currentIndex = 1;
        const maxImages = 3; // cambia este número según cuántas imágenes haya en cada proyecto

        const originalSrc = img.getAttribute("src");
        const basePath = originalSrc.replace(/[0-9]+\.png$/, "");
        const ext = originalSrc.endsWith(".jpg") ? ".jpg" : ".png";

        container.addEventListener("mouseenter", () => {
            if (clickState === 0) {
                flipInner.classList.add("zoomed");
            }
        });

        container.addEventListener("mouseleave", () => {
            if (clickState === 0) {
                flipInner.classList.remove("zoomed");
            }
        });

        container.addEventListener("click", () => {
            clickState = (clickState + 1) % 3;

            switch (clickState) {
                case 0: // Reset
                    flipInner.classList.remove("flipped", "fullscreen");
                    container.classList.remove("fullscreen-container");
                    overlay.style.display = "none";
                    if (!container.matches(':hover')) {
                        flipInner.classList.remove("zoomed");
                    }
                    // Detener carrusel
                    clearInterval(carouselInterval);
                    img.setAttribute("src", originalSrc); // volver a la imagen original
                    currentIndex = 1;
                    break;

                case 1: // Fullscreen + iniciar carrusel
                    flipInner.classList.remove("flipped");
                    flipInner.classList.add("fullscreen");
                    container.classList.add("fullscreen-container");
                    flipInner.classList.remove("zoomed");
                    overlay.style.display = "block";

                    // Iniciar carrusel automático
                    carouselInterval = setInterval(() => {
                        currentIndex++;
                        if (currentIndex > maxImages) currentIndex = 1;
                        img.setAttribute("src", `${basePath}${currentIndex}${ext}`);
                    }, 2000); // cambia cada 2 segundos
                    break;

                case 2: // Flip
                    flipInner.classList.add("flipped");
                    break;
            }
        });
    });
});
