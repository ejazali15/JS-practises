function generateWebsite(title, cName, views, monthOld, thumnail) {
  let html = `<div class="card">
  <div class="image">
    <img src="${thumnail} "alt="" />
  </div>
  <div class="text">
    <h1>${title}</h1>
    <span>${cName}</span>
    <span>${views}</span>
    <span>${monthOld}</span>
  </div>
</div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}
generateWebsite(
  "How to make a website",
  "CodeWithEjaz",
  "78k",
  "2 month Old",
  "about.jpg"
);
generateWebsite(
  "How to make a website",
  "CodeWithEjaz",
  "78k",
  "2 month Old",
  "https://google.com/avatar.png"
);
