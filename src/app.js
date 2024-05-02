// Listen to window popstate for browser history
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.section) {
    showSection(event.state.section);
    checkProgress(event.state.section);
  }
});

// Handle direct navigation (when a user enters a URL directly into the browser or refreshes the page)
document.addEventListener("DOMContentLoaded", function () {
  const sectionId = window.location.hash.replace("#", "");
  if (sectionId) {
    showSection(sectionId);
    checkProgress(sectionId);
  }
});

function navigateToSection(sectionId) {
  // Modify the URL without reloading the page
  const url = `#${sectionId}`;
  const newState = { section: sectionId };
  history.pushState(newState, "", url);

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

// Control progressbars
const progressSteps = ["learn", "create", "quiz", "finish"];

function checkProgress(sectionId) {
  const sectionsLearn = ["daylight", "privacy", "circulation"];
  const sectionsCreate = ["your_own_space"];
  const sectionsQuiz = ["quiz-1", "quiz-2", "quiz-3"];
  if (sectionsLearn.includes(sectionId)) sectionId = "learn";
  if (sectionsCreate.includes(sectionId)) sectionId = "create";
  if (sectionsQuiz.includes(sectionId)) sectionId = "quiz";

  const stepNumber = progressSteps.indexOf(sectionId) + 1;
  const progressbar = document.querySelectorAll(".progressbar");
  progressbar.forEach((bar) => {
    const steps = bar.querySelectorAll("li");
    steps.forEach((step, index) => {
      if (index < stepNumber) {
        step.classList.add("checked");
      } else {
        step.classList.remove("checked");
      }

      if (index + 1 < stepNumber) {
        step.classList.add("progressed");
      } else {
        step.classList.remove("progressed");
      }
    });
  });
}

function resetProgress() {
  const steps = document.querySelectorAll(".progressbar li");
  steps.forEach((step) => {
    step.classList.remove("checked");
    step.classList.remove("progressed");
  });
  progressCurr = 0;
}
