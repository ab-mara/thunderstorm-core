// Pageshow event
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    location.reload(true);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Two-Column Layout configuration
  const layoutConfig = {
    chart1: {
      target: "#chart1",
      insertAfter: "tocolumn1_3",
    },
    chart2: {
      target: "#chart2",
      insertAfter: "tocolumn1_3",
    },
    table: {
      target: "#table1",
      insertAfter: "tocolumn1_2",
    },
    map: {
      target: "#map",
      insertAfter: "tocolumn1_1",
    },
    regionOverview: {
      target: "#region-overview",
      insertAfter: "tocolumn1",
    },
    intelligenceList: {
      target: "#intelligence-list",
      insertAfter: "tocolumn2_3",
    },
    navWarningsList: {
      target: "#nav-warnings-list",
      insertAfter: "tocolumn2_2",
    },
    recentsList: {
      target: "#recents-list",
      insertAfter: "tocolumn2_1",
    },
  };

  // Function to handle the Two-Column Layout
  function handleLayout() {
    let content = document.querySelector(".content");
    for (let key in layoutConfig) {
      if (layoutConfig.hasOwnProperty(key)) {
        let elementConfig = layoutConfig[key];
        let element = content.querySelector(elementConfig.target);
        let insertAfterElement = document.getElementById(
          elementConfig.insertAfter
        );
        if (element && insertAfterElement) {
          insertAfterElement.insertAdjacentElement("afterend", element);
          element.style.display = "block";
        }
      }
    }
  }

  // Call the layout function
  handleLayout();
});
