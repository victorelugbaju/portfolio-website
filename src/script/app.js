const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
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
  const container = document.getElementById("projectsGrid");
  if (!container || !projects) return;
  
  container.innerHTML = projects.map(project => `
    <article class="project" data-url="${project.liveLink}" style="cursor: pointer;">
      <img class="project-img" src="${project.image}" alt="${project.name}">
      <div class="project-body">
        <h3 class="project-name">${project.name}</h3>
        <p class="project-desc">${project.description}</p>
        <a class="project-link" href="${project.liveLink}" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </article>`).join("");

  const projectCards = container.querySelectorAll('.project');
  projectCards.forEach(card => card.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() !== 'a') {
      window.open(card.getAttribute('data-url'), '_blank');
    }
  }));
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
