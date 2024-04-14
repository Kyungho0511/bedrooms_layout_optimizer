function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".content");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add("active");
  }
}

function highlightSelectedMenu(selector) {
  // Unhighlight all menus
  const menus = document.querySelectorAll(".optimization_preference");
  menus.forEach((menu) => {
    menu.classList.remove("selected");
  });

  // Highlight selected menu
  const selectedMenu = document.getElementsByClassName(selector)[0];
  if (selectedMenu) {
    selectedMenu.classList.add("selected");
  }
}
