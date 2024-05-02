// User inputs are stored in the following variables
let userRoomSize = {
  w: 10,
  d: 10,
};
let userFurnitureOption = "furniture3";
let userOptimizationPreference = "daylight";

// Step1: Create Your Room
document.querySelectorAll('input[type="range"]').forEach((range) => {
  range.addEventListener("change", () => {
    if (range.classList.contains("width")) {
      userRoomSize.w = parseInt(range.value);
    } else if (range.classList.contains("depth")) {
      userRoomSize.d = parseInt(range.value);
    }
    console.log(userRoomSize);
    // load room models to 3D scene
  });
});

// Step2: Choose Furniture Option
const furniture2 = ["bed", "desk", "chair"];

document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) userFurnitureOption = radio.value;
    // load furniture images
    items = document.querySelectorAll(".furniture_item");
    if (userFurnitureOption === "furniture3") {
      items.forEach((item) => item.classList.remove("hidden"));
    } else {
      items.forEach((item) => {
        if (!furniture2.includes(item.dataset.furniture)) {
          item.classList.add("hidden");
        }
      });
    }

    // load furniture models to 3D scene
  });
});

// Step3: Choose Preference
document.querySelectorAll(".optimization_preference").forEach((preference) => {
  preference.addEventListener("click", () => {
    if (preference.classList.contains("daylight_preference")) {
      // load furniture models to 3D scene
      userOptimizationPreference = "daylight";
    } else if (preference.classList.contains("privacy_preference")) {
      // load furniture models to 3D scene
      userOptimizationPreference = "privacy";
    } else if (preference.classList.contains("circulation_preference")) {
      // load furniture models to 3D scene
      userOptimizationPreference = "circulation";
    }
    console.log(userOptimizationPreference);
  });
});
