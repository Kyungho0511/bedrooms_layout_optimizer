// Listen to window popstate for browser history
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.section) {
    console.log(event.state.section);
    showSection(event.state.section);
  }
});

// Handle direct navigation (when a user enters a URL directly into the browser or refreshes the page)
document.addEventListener("DOMContentLoaded", function () {
  const sectionId = window.location.hash.replace("#", "");
  if (sectionId) {
    showSection(sectionId);
  }
});

function navigateToSection(sectionId) {
  // Modify the URL without reloading the page
  const url = `#${sectionId}`;
  const newState = { section: sectionId };
  history.pushState(newState, "", url);
  console.log("New state pushed:", newState);
  console.log("Updated history length:", window.history.length);

  showSection(sectionId);
}

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

function checkProgress(stepNumber) {
  const steps = document.querySelectorAll(".progressbar li");
  steps.forEach((step, index) => {
    if (index < stepNumber) {
      step.classList.add("checked");
    } else {
      step.classList.remove("checked");
    }

    if (index + 1 < stepNumber) {
      step.classList.add("progressed");
    }
  });
}

function resetProgress() {
  const steps = document.querySelectorAll(".progressbar li");
  steps.forEach((step) => {
    step.classList.remove("checked");
    step.classList.remove("progressed");
  });
}
