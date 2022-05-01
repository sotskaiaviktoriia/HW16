"use strict";

//Task
const list = document.getElementById("albums");

fetch("http://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("album_title");
      li.innerHTML = item.title;
      const button = document.createElement("button");
      button.classList.add("remove_button");
      button.textContent = "delete";
      list.append(li);
      li.append(button);
    });
  })
  .catch((error) => console.error(error));

list.addEventListener("click", (event) => {
  const isRemoveButton = event.target.className === "remove_button";

  if (isRemoveButton) {
    const rowList = event.target.closest(".album_title");
    rowList.remove();
  }
});
