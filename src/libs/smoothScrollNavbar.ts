// Smooth Scrolling für die Navbar-Links

function scroll() {
  return document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      if (
        anchor instanceof HTMLAnchorElement &&
        anchor !== null &&
        anchor.hasAttribute("href")
      ) {
        const targetId = anchor.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        const header = document.getElementById("header");

        // set achors text color to active and remove it from all other anchors
        // document.querySelectorAll('a[href^="#"]').forEach((anchor2) => {
        //   if (anchor2 instanceof HTMLAnchorElement) {
        //     anchor2.style.opacity = "0.6";
        //   }
        // });

        // anchor.style.opacity = "1";

        if (targetElement !== null && header instanceof HTMLElement) {
          window.scrollTo({
            top: targetElement.offsetTop - header.offsetHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });
}

scroll();
document.addEventListener("astro:after-swap", () => scroll());

window.addEventListener("scroll", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    if (anchor instanceof HTMLAnchorElement) {
      const targetId = anchor.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");
      const header = document.getElementById("header");

      if (targetElement !== null && header instanceof HTMLElement) {
        if (
          window.scrollY >= targetElement.offsetTop - header.offsetHeight &&
          window.scrollY <
            targetElement.offsetTop +
              targetElement.offsetHeight -
              header.offsetHeight
        ) {
          anchor.style.opacity = "1";
        } else {
          anchor.style.opacity = "0.6";
        }
      }
    }
  });
});
