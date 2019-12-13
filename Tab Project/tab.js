let tabButtons = document.querySelectorAll(
  ".tabContainer .buttonContainer button"
);
// debugger;
let tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function tabSelector(tabIndex, color) {
  tabButtons.forEach(tab => {
    tab.style.backgroundColor = "";
    tab.style.color = "";
  });
  tabButtons[tabIndex].style.display = "block";
  tabButtons[tabIndex].style.color = "white";
  tabButtons[tabIndex].style.backgroundColor = color;

  tabPanels.forEach(panel => {
    panel.style.display = "none";
  });
  tabPanels[tabIndex].style.display = "block";
  tabPanels[tabIndex].style.backgroundColor = color;
}

tabSelector(0, "#f4436");
