let login = document.querySelector("#login");
let exploreJob = document.querySelector("#explore");
let search = document.querySelector("#search");
let results = document.querySelector("#results");
let courses = document.querySelector("#courses");
let header = document.querySelector("header");
let main = document.querySelector("main");
let nav = document.querySelector("nav");
let services = document.querySelector('#services')
let footer = document.querySelector('footer')

/* ===============main page buttons===================== */
let catalogueButton = document.querySelector("#catalogue");

function load() {
  login.style.display = "none";
  exploreJob.style.display = "none";
  search.style.display = "none";
  results.style.display = "none";
  courses.style.display = "none";
}
function toLogin() {
  header.style.display = "none";
  nav.style.display = "none";
  main.style.display = "none";
  services.style.display = "none";
  footer.style.display = "none";
  login.style.display = "block";
}

catalogueButton.addEventListener("click", toLogin);
document.addEventListener("DOMContentLoaded", load);
