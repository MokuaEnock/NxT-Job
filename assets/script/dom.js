let login = document.querySelector("#login");
let exploreJob = document.querySelector("#explore");
let search = document.querySelector("#search");
let results = document.querySelector("#results");
let courses = document.querySelector("#courses");
let header = document.querySelector("header");
let main = document.querySelector("main");
let nav = document.querySelector("nav");
let services = document.querySelector("#services");
let footer = document.querySelector("footer");
let searchCourse = document.querySelector("#searchCourse");

/* ===============main page buttons===================== */
let catalogueButton = document.querySelector("#catalogue");

/* ================services section buttons=============================== */
let fullTime = document.querySelector("#full-time");
let shortTime = document.querySelector("#short-time");
let lesson = document.querySelector("#lesson");
let servicesButtons = document.querySelectorAll("#services>button");

/* ==================search find and apply buttons================== */
let applySubmit = document.querySelector("#applySubmit");

function submitApply() {
  search.style.display = "flex";
  results.style.display = "flex";
  
}
function displayFullTime() {
  exploreJob.style.display = "flex";
  search.style.display = "flex";
  courses.style.display = "none";
  searchCourse.style.display = "none";
}

function displayLesson() {
  courses.style.display = "flex";
  searchCourse.style.display = "flex";
  exploreJob.style.display = "none";
}

function load() {
  login.style.display = "none";
  exploreJob.style.display = "none";
  search.style.display = "none";
  results.style.display = "none";
  courses.style.display = "none";
  services.style.display = "none";
  searchCourse.style.display = "none";
}

function toServices() {
  services.style.display = "flex";
}

lesson.addEventListener("click", displayLesson);
fullTime.addEventListener("click", displayFullTime);
catalogueButton.addEventListener("click", toServices);
document.addEventListener("DOMContentLoaded", load);
