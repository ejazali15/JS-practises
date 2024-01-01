let username = document.querySelector("#username");
let image = document.querySelector("#image");
let login = document.querySelector("#login");
let location1 = document.querySelector("#location");
let follower1 = document.querySelector("#follower1");
let bois = document.querySelector("#bois");
async function getData() {
  let api = await fetch("https://api.github.com/users/ejazali15");
  let data = await api.json();
  console.log(data);
  username.innerHTML = data.name;
  image.setAttribute("src", data.avatar_url);
  login.innerHTML = "@" + data.login;
  location1.innerHTML = `Location : ${data.location}`;
  follower1.innerHTML = "Followers :" + data.followers;
  bois.innerHTML = data.bio;
}
getData();
