/* Adzuna jobs */
/*
let url =`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=Machine%20Learning`;

head = {
  method: "GET",
  mode: "cors",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
};
fetch(url, head)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
  })
  .catch((error) => console.log("error", error));
 */

/* let search = document.querySelector("#search_info>span>input");

function searchJob(e) {
  e.preventDefault();
  let searchTerm = search.value;
  console.log(searchTerm);
}

  let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=${value1}%20${value2}`;
 */

let jobForm = document.querySelector("#search_info");

jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let jobValue = document.querySelector("#job_search_value");
  let searchTerm = jobValue.value.split(" ");
  let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=${searchTerm[0]}%20${searchTerm[1]}`;
  console.log(url);
  jobForm.reset();
});
