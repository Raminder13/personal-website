const sections = document.querySelectorAll("section");

function setActiveSection() {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop - sectionHeight * 0.25 &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setActiveSection);
