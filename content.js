document.querySelectorAll("tr td:first-child").forEach((td) => {
  let lessonNumber = parseInt(td.textContent, 10);
  if (!isNaN(lessonNumber)) {
    td.textContent = lessonNumber + 1;
  }
});
