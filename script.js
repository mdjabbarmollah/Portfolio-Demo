// Highlights the current section in the top nav as the user scrolls.
// Kept intentionally small — this site has no build step and no framework.

const sections = document.querySelectorAll("main .section, .hero");
const navLinks = document.querySelectorAll(".topnav a");

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          const match = link.getAttribute("href") === `#${id}`;
          link.style.color = match ? "var(--text)" : "";
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );

  sections.forEach((section) => {
    if (section.id) observer.observe(section);
  });
}
