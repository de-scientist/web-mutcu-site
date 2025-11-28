import { useEffect } from "react";

declare const AOS: any;
declare const bootstrap: any;

export const usePageEffects = () => {
  useEffect(() => {
    // AOS init (same options as original JS)
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
    }

    // Navbar "scrolled" class
    const navbar = document.querySelector(".navbar");
    const onScroll = () => {
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // run once

    // Smooth scrolling for in-page anchors (#...)
    const anchorSelector = "a.nav-link[href^='#'], .btn[href^='#']";
    const anchors = document.querySelectorAll<HTMLAnchorElement>(anchorSelector);

    const onAnchorClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href") || "";
      if (!href.startsWith("#")) return;

      e.preventDefault();
      const targetElement = document.querySelector<HTMLElement>(href);
      const nav = document.querySelector<HTMLElement>(".navbar");
      const navbarHeight = nav?.offsetHeight ?? 0;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });

        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });
          bsCollapse.hide();
        }
      }
    };

    anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

    return () => {
      window.removeEventListener("scroll", onScroll);
      anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
    };
  }, []);
};