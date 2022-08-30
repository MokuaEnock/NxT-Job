document.addEventListener("DOMContentLoaded", load);

function load() {
  let login = document.querySelector("#login");
  let exploreJob = document.querySelector("#explore");
  let search = document.querySelector("#search");
  let results = document.querySelector("#results");
  let courses = document.querySelector("#courses");
  login.style.display = "none";
  exploreJob.style.display = "none";
  search.style.display = "none";
  results.style.display = "none";
  courses.style.display = "none";
}
