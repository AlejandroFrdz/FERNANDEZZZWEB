// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  // ##########################################
  // ########## FUNCIÓN ORDENAR TEXTO #########
  // ##########################################

  function ordenarTexto(targetSelector, finalText, options = {}) {
    const caracteres = options.chars || "*-X!$0_?@~";
    const iteracionesPorLetra = options.iterations || 20;
    const velocidad = options.speed || 1000;

    const spans = document.querySelectorAll(targetSelector);
    const letrasFinales = finalText.split("");

    spans.forEach((span, i) => {
      if (!span || i >= letrasFinales.length) return;

      const letraFinal = letrasFinales[i];
      let iteracion = 0;

      function animarLetra() {
        if (iteracion >= iteracionesPorLetra) {
          span.textContent = letraFinal;
          return;
        }

        const randomChar = caracteres[Math.floor(Math.random() * caracteres.length)];
        span.textContent = randomChar;

        iteracion++;
        setTimeout(animarLetra, velocidad + Math.random() * 50);
      }

      setTimeout(animarLetra, i * 150);
    });

    if (typeof options.onComplete === 'function') {
      setTimeout(options.onComplete, finalText.length * 150 + velocidad);
    }
  }

  // ##########################################
  // ########## ANIMACIÓN DE TEXTO ############
  // ##########################################

  let textoAnimado = false;

  ordenarTexto('.ordenar', 'FERNANDEZZZ', {
    speed: 10,
    onComplete: () => {
      textoAnimado = true;
      const indicador = document.querySelector('.scroll-indicator');
      if (indicador) indicador.style.opacity = '1';
    }
  });

  // ##########################################
  // ########## TRANSICIÓN CON SCROLL #########
  // ##########################################
// ... (mantén todo el código anterior hasta la animación de texto)

// ##########################################
// ########## TRANSICIÓN CON SCROLL #########
// ##########################################

gsap.registerPlugin(ScrollTrigger);

const presentation = document.querySelector('.presentacion');
const mainContent = document.querySelector('.container');
const yoSoySection = document.querySelector('.yoSoy');

// Configuración mejorada de ScrollTrigger
// ... (código anterior se mantiene igual)

// Configuración mejorada de ScrollTrigger
ScrollTrigger.create({
  trigger: ".yoSoy",
  start: "top center",
  end: "bottom center",
  onEnter: () => {
      if (presentation && textoAnimado) {
          presentation.classList.add('hide');
          mainContent.classList.add('show');

          setTimeout(() => {
            presentation.style.display = 'none';

      },800);
    }
  },
  onLeaveBack: () => {
      if (presentation) {
          presentation.classList.remove('hide');
          mainContent.classList.remove('show');
      }
  },
  markers: false
});

// Manejo mejorado del scroll manual
function checkScroll() {
  const yoSoyRect = yoSoySection.getBoundingClientRect();
  const triggerPoint = window.innerHeight / 2;
  
  if (yoSoyRect.top <= triggerPoint && textoAnimado) {
      presentation.classList.add('hide');
      mainContent.classList.add('show');
  } else {
      presentation.classList.remove('hide');
      mainContent.classList.remove('show');
  }
}

// ... (el resto del código se mantiene igual)

// Evento de scroll optimizado
window.addEventListener('scroll', () => {
    checkScroll();
}, {passive: true});

// Click en ambos indicadores de scroll
[document.querySelector('.scroll-indicator'), document.querySelector('.scroll-abajo')].forEach(element => {
    if (element) {
        element.addEventListener('click', () => {
            if (textoAnimado) {
                presentation.classList.add('hide');
                mainContent.classList.add('show');
                window.scrollTo({
                    top: yoSoySection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Asegurar que la animación se complete
window.addEventListener('load', () => {
    if (textoAnimado) {
        checkScroll();
    }
});

// ... (mantén el resto del código)

  // ##########################################
  // ########### ANIMACIÓN PUNTERO ############
  // ##########################################

  let followSpeed = 0.1;
  const circle = document.getElementById("circuloCursor");

  let ratonX = window.innerWidth / 2;
  let ratonY = window.innerHeight / 2;
  let circuloX = ratonX;
  let circuloY = ratonY;

  document.addEventListener("mousemove", (e) => {
    ratonX = e.clientX;
    ratonY = e.clientY;
  });

  function animate() {
    if (circle) {
      circuloX += (ratonX - circuloX) * followSpeed;
      circuloY += (ratonY - circuloY) * followSpeed;
      circle.style.transform = `translate(${circuloX}px, ${circuloY}px)`;
    }
    requestAnimationFrame(animate);
  }

  animate();

  // ##########################################
  // #### REDIRECCIÓN EN PÁGINA CARGADOR ######
  // ##########################################

  if (window.location.pathname.includes("CARGADOR.html")) {
    const params = new URLSearchParams(window.location.search);
    const nextPage = params.get("to") || "Index.html";

    setTimeout(() => {
      window.location.href = nextPage;
    }, 3500);
  }

  // ##########################################
  // ### ANIMACIÓN CONTINUA DE TEXTOS SLIDE ###
  // ##########################################

  document.querySelectorAll('.slide-text').forEach((slide) => {
    const width = slide.scrollWidth;

    gsap.to(slide, {
      x: -width / 2,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  });

});








// Asegura que los elementos sean interactivos
document.addEventListener('DOMContentLoaded', () => {
  // Habilita interacción en el header
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  if (header) {
      header.style.pointerEvents = 'auto';
      header.querySelectorAll('*').forEach(el => {
          el.style.pointerEvents = 'auto';
      });
  }
  if (footer) {
      footer.style.pointerEvents = 'auto';
      footer.querySelectorAll('*').forEach(el => {
          el.style.pointerEvents = 'auto';
      });
  }

  // Solución definitiva para el cursor
  const cursor = document.getElementById('circuloCursor');
  if (cursor) {
      cursor.style.pointerEvents = 'none';
      document.addEventListener('mousemove', (e) => {
          // Verifica si el cursor está sobre un elemento interactivo
          const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
          if (elementBelow && (elementBelow.tagName === 'A' || elementBelow.tagName === 'BUTTON' || elementBelow.onclick)) {
              cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1.5)`;
          } else {
              cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
          }
      });
  }
});



console.log("El script se está ejecutando");



//VIDEOS PROYECTOS
const video1 = document.getElementById('videoProyecto1');
const video2 = document.getElementById('videoProyecto2');
const video3 = document.getElementById('videoProyecto3');
const hoverSign = document.querySelector('.hover-sign');


const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
  video.addEventListener('mouseover', function() {
    video.play();
    hoverSign.classList.add('active');
  });

  video.addEventListener('mouseout', function() {
    video.pause();
    hoverSign.classList.remove('active');
  
  });

})


document.addEventListener("DOMContentLoaded", () => {
    const flipContainers = document.querySelectorAll(".flip-container");

    const overlay = document.createElement("div");
    overlay.id = "fullscreen-overlay";
    overlay.style.display = "none";
    document.body.appendChild(overlay);

    const fullscreenWrapper = document.createElement("div");
    fullscreenWrapper.id = "fullscreen-image-wrapper";
    fullscreenWrapper.style.display = "none";
    // Propiedades CSS se establecen directamente en el CSS ahora:
    // fullscreenWrapper.style.position = "fixed";
    // fullscreenWrapper.style.top = "50%";
    // fullscreenWrapper.style.left = "50%";
    // fullscreenWrapper.style.transform = "translate(-50%, -50%)";
    // fullscreenWrapper.style.zIndex = "1000";
    document.body.appendChild(fullscreenWrapper);

    flipContainers.forEach(container => {
        const flipInner = container.querySelector(".flip-inner");
        const img = container.querySelector(".flip-front img");

        let clickState = 0;
        let carouselInterval = null;
        let currentIndex = 1;
        const maxImages = 3; // Asegúrate de que este valor sea correcto

        const originalParent = container.parentNode;
        const originalNextSibling = container.nextSibling;

        const originalSrc = img.getAttribute("src");
        const basePath = originalSrc.replace(/[0-9]+\.(png|jpg|jpeg|gif)$/, "");
        const extMatch = originalSrc.match(/\.([a-zA-Z0-9]+)$/);
        const ext = extMatch ? extMatch[0] : ".png";

        img.dataset.originalSrc = originalSrc;


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
                case 0: // Estado 0: Normal
                    clearInterval(carouselInterval);
                    img.setAttribute("src", img.dataset.originalSrc);
                    currentIndex = 1;

                    if (originalNextSibling) {
                        originalParent.insertBefore(container, originalNextSibling);
                    } else {
                        originalParent.appendChild(container);
                    }

                    flipInner.classList.remove("flipped", "fullscreen");
                    container.classList.remove("fullscreen-active"); // <--- Nueva clase para el container
                    fullscreenWrapper.style.display = "none";
                    overlay.style.display = "none";

                    if (container.matches(':hover')) {
                        flipInner.classList.add("zoomed");
                    } else {
                        flipInner.classList.remove("zoomed");
                    }
                    break;

                case 1: // Estado 1: Pantalla completa
                    flipInner.classList.remove("flipped", "zoomed");

                    fullscreenWrapper.appendChild(container);
                    fullscreenWrapper.style.display = "flex"; // Usar flex para centrar contenido dentro del wrapper

                    container.classList.add("fullscreen-active"); // <--- Nueva clase para el container
                    flipInner.classList.add("fullscreen"); // La clase 'fullscreen' sigue en flip-inner
                    overlay.style.display = "block";

                    img.setAttribute("src", `${basePath}1${ext}`);
                    currentIndex = 1;
                    carouselInterval = setInterval(() => {
                        currentIndex++;
                        if (currentIndex > maxImages) currentIndex = 1;
                        img.setAttribute("src", `${basePath}${currentIndex}${ext}`);
                    }, 2000);
                    break;

                case 2: // Estado 2: Volteada
                    flipInner.classList.add("flipped");
                    break;
            }
        });
    });

    overlay.addEventListener("click", () => {
        const activeFullscreenContainer = fullscreenWrapper.querySelector(".flip-container");
        if (activeFullscreenContainer) {
            activeFullscreenContainer.click();
        }
    });
});


//####################BARRA LATERAL###############3

const barraLat = document.querySelector('.barra-lateral');
const menu = document.querySelector('.menu-icono');
const cierre = document.querySelector('.icono-cierre')

menu.addEventListener("click", function() {
  barraLat.classList.remove("close-barraLat")
  barraLat.classList.add("open-barraLat")
})

cierre.addEventListener("click", function() {
  barraLat.classList.remove("open-barraLat")
  barraLat.classList.add("close-barraLat")
})
