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

function showSidebar(sidebarId) {
  // Hide all sidebars
  const sidebars = document.querySelectorAll(".sidebar");
  sidebars.forEach((sidebar) => {
    sidebar.style.display = "none";
  });

  // Show the selected sidebar
  const activeSidebar = document.getElementById(sidebarId);
  activeSidebar.style.display = "flex";
}

function highlightSelectedMenu(menuId) {
  // Unhighlight all menus
  const menus = document.querySelectorAll(".optimization_preference");
  menus.forEach((menu) => {
    menu.classList.remove("selected");
  });

  // Highlight selected menu
  const selectedMenu = document.getElementsByClassName(menuId)[0];
  if (selectedMenu) {
    selectedMenu.classList.add("selected");
  }
}
