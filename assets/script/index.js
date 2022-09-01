/* Adzuna jobs */

let url =
  "https://api.adzuna.com/v1/api/jobs/us/search/2?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=100&what=software&sort_by=salary&salary_min=10000&content-type=application/json";

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
    let jobJson = JSON.stringify(data.results);
    console.log(jobJson);
  })
  .catch((error) => console.log("error", error));
