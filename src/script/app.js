const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const projectsGrid = document.getElementById("projectsGrid");
const sections = document.querySelectorAll("section[id]");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  navToggle.classList.toggle("open");
});
navLinks.forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  navToggle.classList.remove("open");
}));

function renderProjects() {
  projectsGrid.innerHTML = projects.map(p => `
    <article class="project">
      <img class="project-img" src="${p.image}" alt="${p.name}">
      <div class="project-body">
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.description}</p>
        <a class="project-link" href="${p.liveLink}" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </article>`).join("");
}
renderProjects();

function setActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach(s => {
    const top = s.offsetTop - 90;
    const height = s.offsetHeight;
    const id = s.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${id}"]`);
      if (active) active.classList.add("active");
    }
  });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink();

document.getElementById("year").textContent = new Date().getFullYear();
