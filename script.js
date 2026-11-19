document.addEventListener("DOMContentLoaded", () => {
  // ANNÉE AUTOMATIQUE DU FOOTER

  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // MENU MOBILE

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#navigation");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
      );
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
      });
    });

    // Fermeture avec la touche Échap

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        nav.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Ouvrir le menu");
      }
    });
  }

  // ANIMATIONS AU DÉFILEMENT

  const revealItems = document.querySelectorAll(".reveal");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });
  }

  // CARROUSEL DES DIPLÔMES ET CERTIFICATIONS

  const carousel = document.querySelector(".certificate-carousel");

  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll(".certificate-slide"));

    const indicators = Array.from(document.querySelectorAll(".indicator"));

    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");

    let currentSlide = 0;

    // Vérification des éléments disponibles

    if (
      slides.length > 0 &&
      indicators.length === slides.length &&
      prevBtn &&
      nextBtn
    ) {
      function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          const isActive = i === currentSlide;

          slide.classList.toggle("active", isActive);

          slide.setAttribute("aria-hidden", String(!isActive));

          slide.inert = !isActive;
        });

        indicators.forEach((indicator, i) => {
          const isActive = i === currentSlide;

          indicator.classList.toggle("active", isActive);

          if (isActive) {
            indicator.setAttribute("aria-current", "true");
          } else {
            indicator.removeAttribute("aria-current");
          }
        });
      }

      // DOCUMENT SUIVANT

      nextBtn.addEventListener("click", () => {
        showSlide(currentSlide + 1);
      });

      // DOCUMENT PRÉCÉDENT

      prevBtn.addEventListener("click", () => {
        showSlide(currentSlide - 1);
      });

      // NAVIGATION PAR INDICATEURS

      indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
          showSlide(index);
        });
      });

      // NAVIGATION AU CLAVIER

      carousel.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showSlide(currentSlide + 1);
        }

        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showSlide(currentSlide - 1);
        }
      });

      // Initialisation

      showSlide(0);
    }
  }
});

// =================================
// GESTION DU THEME
// =================================

const themeButton = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");

if (themeButton && themeIcon) {

    const savedTheme = localStorage.getItem("portfolio-theme");

    const initialTheme =
        savedTheme === "dark" || savedTheme === "light"
            ? savedTheme
            : "light";

    function applyTheme(theme) {

        document.documentElement.setAttribute("data-theme", theme);

        const isDark = theme === "dark";

        themeIcon.textContent = isDark ? "☀" : "☾";

        themeButton.setAttribute(
            "aria-pressed",
            String(isDark)
        );

        themeButton.setAttribute(
            "aria-label",
            isDark
                ? "Activer le thème clair"
                : "Activer le thème sombre"
        );

        localStorage.setItem("portfolio-theme", theme);
    }

    applyTheme(initialTheme);

    themeButton.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        applyTheme(currentTheme === "dark" ? "light" : "dark");

    });
}