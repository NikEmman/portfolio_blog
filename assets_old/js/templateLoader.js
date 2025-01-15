// Function to load template content
function loadTemplate(templateId, targetId) {
  const template = document.getElementById(templateId);
  const target = document.getElementById(targetId);
  const clone = document.importNode(template.content, true);
  target.appendChild(clone);
}
// Load templates from the external file
function loadExternalTemplates() {
  fetch("templates.html")
    .then((response) => response.text())
    .then((html) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      document.body.appendChild(tempDiv);
      // Load Navbar and Footer templates
      loadTemplate("navbar-template", "navbar");
      loadTemplate("footer-template", "footer");
    });
}
loadExternalTemplates();
