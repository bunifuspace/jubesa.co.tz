const heading = document.querySelector(".heading");

if (heading) {
  const headingText = heading.querySelectorAll("h1, h2, h3");

  function updateHeading() {
    const progress = Math.min(window.scrollY / 500, 1);

    headingText.forEach((text, index) => {
      const delay = index * 0.08;

      const fade = Math.min(Math.max((progress - delay) / (1 - delay), 0), 1);

      text.style.opacity = 1 - fade;
    });
  }

  window.addEventListener("scroll", updateHeading, {
    passive: true,
  });

  updateHeading();
}

const menu = document.getElementById("menu");
const close = document.getElementById("close");
const sidebar = document.querySelector(".sidebar");

if (menu && close && sidebar) {
  menu.addEventListener("click", () => {
    sidebar.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  close.addEventListener("click", () => {
    sidebar.classList.remove("active");
    document.body.style.overflow = "";
  });

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}
