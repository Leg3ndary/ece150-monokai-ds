document.querySelectorAll("tr td:first-child").forEach((td, index) => {
  let lessonNumber = parseInt(td.textContent, 10);

  if (!isNaN(lessonNumber)) {
    td.textContent = "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("custom-cb");

    // for lessons
    const checkboxKey = `lsn_${index}`;

    const savedState = localStorage.getItem(checkboxKey);

    if (savedState === "checked") {
      checkbox.checked = true;
    }

    // on every change update
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        localStorage.setItem(checkboxKey, "checked");
      } else {
        localStorage.setItem(checkboxKey, "unchecked");
      }
    });

    const lessonText = document.createTextNode(lessonNumber);

    td.appendChild(checkbox);
    td.appendChild(lessonText);
  }
});
