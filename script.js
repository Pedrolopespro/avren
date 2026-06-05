document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  } else {
    const iconFallbacks = {
      "arrow-right": "->",
      "arrow-up-right": "↗",
      "building": "□",
      "building-2": "□",
      briefcase: "▣",
      calendar: "◷",
      check: "✓",
      "chevron-right": ">",
      compass: "◇",
      eye: "◌",
      lock: "•",
      map: "•",
      "map-pin": "•",
      menu: "☰",
      network: "◇",
      pause: "Ⅱ",
      phone: "☎",
      play: "▶",
      "play-circle": "▶",
      shield: "◇",
      "shield-check": "◇",
      "trending-up": "↗",
      users: "◦",
      x: "×",
    };

    document.querySelectorAll("[data-lucide]").forEach((icon) => {
      icon.textContent = iconFallbacks[icon.dataset.lucide] || "•";
      icon.setAttribute("aria-hidden", "true");
    });
  }

  // 2. Contact Form Submission Handler
  const form = document.querySelector(".contact-form");
  const note = document.querySelector(".form-note");

  if (form && note) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      note.textContent = "Solicitação registrada. A equipe AVREN retornará para uma conversa reservada.";
      form.reset();
      
      // Auto-clear message after 8 seconds
      setTimeout(() => {
        note.textContent = "";
      }, 8000);
    });
  }

  // 3. Video controls
  const video = document.querySelector("#avren-video");
  const videoButton = document.querySelector(".video-play");

  if (video && videoButton) {
    const syncVideoButton = () => {
      const isPaused = video.paused;
      videoButton.classList.toggle("is-playing", !isPaused);
      videoButton.setAttribute("aria-label", isPaused ? "Reproduzir vídeo" : "Pausar vídeo");
      videoButton.innerHTML = `<i data-lucide="${isPaused ? "play" : "pause"}"></i>`;

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    };

    video.addEventListener("play", syncVideoButton);
    video.addEventListener("pause", syncVideoButton);

    videoButton.addEventListener("click", async () => {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    });

    syncVideoButton();
  }

  // 4. Mobile Menu Interactive Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isActive = mobileMenu.classList.toggle("is-active");
      menuToggle.setAttribute("aria-expanded", isActive);
      mobileMenu.setAttribute("aria-hidden", !isActive);

      // Transition icons smoothly
      if (isActive) {
        menuToggle.innerHTML = '<i data-lucide="x"></i>';
        document.body.style.overflow = "hidden"; // Prevent scrolling behind overlay
      } else {
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        document.body.style.overflow = ""; // Re-enable scrolling
      }

      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
    });

    // Close mobile menu when links are clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-active");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        document.body.style.overflow = "";
        
        if (typeof lucide !== "undefined") {
          lucide.createIcons();
        }
      });
    });
  }

  // 5. Fallback Scroll animations using IntersectionObserver for Firefox / older browsers
  if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px", // Trigger slightly before it hits viewport center
      }
    );

    revealElements.forEach((el) => {
      el.classList.add("reveal-fallback");
      observer.observe(el);
    });
  }
});
