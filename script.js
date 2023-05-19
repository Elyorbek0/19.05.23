let a = fetch("https://jsonplaceholder.typicode.com/photos")
  .then(res => res.json())
  .then(data => {
    let row = document.querySelector(".row");
    data.forEach(element => {
      let newElement = document.createElement("div");
      newElement.innerHTML = `
        <h1>${element.id}</h1>
        <col-3>
        <img src="${element.url}" alt="">
        <col-3/>
      `;
      row.appendChild(newElement);
    });
  });