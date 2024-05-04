import eventManager from "./EventManager";

/**
 * User inputs are stored in the userData. Everytime uerserData is updated by setUserData
 * setUserInput method in 'Experience' React component is called by useState, automatically
 * leading to rerendering of the component.
 */
let userData = {
  roomSize: { l: 12, w: 16 },
  furnitureOption: "furniture3",
  optimizationPreference: "daylight",
  optimizationRank: 1,
  score: 0,
};

export const getUserData = () => userData;

export const setUserData = (newData) => {
  userData = newData;
  eventManager.publish("userDataChanged", userData);
};

// Step1: Create Your Room section
document.querySelectorAll('input[type="range"]').forEach((range) => {
  range.addEventListener("change", () => {
    // Update userData
    if (range.classList.contains("width")) {
      const newData = {
        ...userData,
        roomSize: { ...userData.roomSize, l: parseInt(range.value) },
      };
      setUserData(newData);
    } else if (range.classList.contains("depth")) {
      const newData = {
        ...userData,
        roomSize: { ...userData.roomSize, w: parseInt(range.value) },
      };
      setUserData(newData);
    }

    // Update scale text
    range.parentElement.querySelector(".scale").innerText = `${range.value}ft`;
  });
});

// Step2: Choose Furniture Option section
const furniture2 = ["bed", "desk", "chair"];
document.querySelectorAll('input[name="furniture_option"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      // Update userData
      const newData = {
        ...userData,
        furnitureOption: radio.value,
      };
      setUserData(newData);
    }

    // load furniture images
    const items = document.querySelectorAll(".furniture_item");
    if (userData.furnitureOption === "furniture3") {
      items.forEach((item) => item.classList.remove("hidden"));
    } else {
      items.forEach((item) => {
        if (!furniture2.includes(item.dataset.furniture)) {
          item.classList.add("hidden");
        }
      });
    }
  });
});

// Step3: Choose Preference section
document.querySelectorAll(".optimization_preference").forEach((preference) => {
  preference.addEventListener("click", () => {
    // Update userData
    if (preference.classList.contains("daylight_preference")) {
      const newData = {
        ...userData,
        optimizationPreference: "daylight",
      };
      setUserData(newData);
    } else if (preference.classList.contains("privacy_preference")) {
      const newData = {
        ...userData,
        optimizationPreference: "privacy",
      };
      setUserData(newData);
    } else if (preference.classList.contains("circulation_preference")) {
      const newData = {
        ...userData,
        optimizationPreference: "circulation",
      };
      setUserData(newData);
    }
  });
});

// Step4: Pick the Layout section
const layoutRadio = document.querySelectorAll(
  'input[name="optimization_rank"]'
);
layoutRadio.forEach((radio) => {
  radio.addEventListener("change", () => {
    // Update userData
    if (radio.checked) {
      const newData = {
        ...userData,
        optimizationRank: radio.value,
      };
      setUserData(newData);

      // highlight selected radio
      layoutRadio.forEach((radio) => {
        radio.parentElement
          .querySelector(".rank-text")
          .classList.remove("selected");
      });
      radio.parentElement.querySelector(".rank-text").classList.add("selected");
    }
  });
});

// Quiz section
const answers = {
  "quiz-1": "daylight",
  "quiz-2": "privacy",
  "quiz-3": "circulation",
};
const quizCounts = 3;

for (let i = 0; i < quizCounts; i++) {
  document
    .querySelector(`#quiz-${i + 1}`)
    .querySelectorAll(".quiz_item")
    .forEach((item) => {
      item.addEventListener("click", () => {
        if (item.dataset.quiz === answers[`quiz-${i + 1}`]) userData.score += 1;

        // update score for the finish section when user answers the last quiz
        if (i === 2) {
          document.querySelector(".score").innerHTML = userData.score;
        }
      });
    });
}

// Logo & StartOver button reset inputs on click
document.querySelector(".logo").addEventListener("click", () => {
  resetInputs();
});
document.querySelector(".start_over").addEventListener("click", () => {
  resetInputs();
});

// next button in create_room section populate default furniture for 3d scene
document
  .querySelector("#create_room")
  .querySelector("button")
  .addEventListener("click", () => {
    setUserData({ ...userData });
  });

function resetInputs() {
  userData = {
    roomSize: { l: 12, w: 16 },
    furnitureOption: "furniture3",
    optimizationPreference: "daylight",
    optimizationRank: 1,
    score: 0,
  };
  setUserData(userData);
}
