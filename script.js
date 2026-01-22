const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal responsive portfolio using HTML, CSS, JS"
  },
  {
    title: "To-Do List App",
    desc: "Task manager with localStorage"
  },
  {
    title: "Product Listing Page",
    desc: "Filter & sort products dynamically"
  },
  {
    title: "API Based App",
    desc: "Fetch data from public API using JavaScript"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
  `;

  projectList.appendChild(card);
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent 😊");
  this.reset();
});

// Scroll function
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}