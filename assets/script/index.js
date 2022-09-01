/* Adzuna jobs */

/* function createCard(array) {
  array.forEach((element) => {
    let jobCard = document.createElement("div");
    jobCard.className = "category_card";
    // card header
    let jobCardHeader = document.createElement("div");
    jobCardHeader.className = "category_card_header_info";
    let jobCardHeaderTitle = document.createElement("div");
    jobCardHeaderTitle.className = "job_desc_title";
    jobCardHeaderTitle.innerText = element.title;
    let jobCardHeaderdesc = document.createElement("div");
    jobCardHeaderdesc.className = "company_desc_name";
    jobCardHeaderdesc.innerText = element.company.display_name;
    jobCardHeader.appendChild(jobCardHeaderTitle);
    jobCardHeader.append(jobCardHeaderdesc);
    jobCard.append(jobCardHeader);
    // card description
    let jobCardBody = document.createElement("p");
    jobCardBody.className = "body_job_desc";
    jobCardBody.innerHTML = element.description;
    jobCardBody.style.overflow = "hidden";
    jobCard.append(jobCardBody);

    // small body
    let jobCardSmallBody = document.createElement("div");
    jobCardSmallBody.className = "body_job_info";
    let jobCardSpan1 = document.createElement("span");
    let jobCardSpan2 = document.createElement("span");
    let jobCardSpan3 = document.createElement("span");
    jobCardSpan1.className = "body_job_info_span";
    jobCardSpan2.className = "body_job_info_span";
    jobCardSpan3.className = "body_job_info_span";
    jobCardSpan1.innerText = element.contract_time;
    jobCardSpan2.innerText = element.location.area[1];
    jobCardSpan3.innerText = element.category.__CLASS__.label;
    jobCardSmallBody.appendChild(jobCardSpan1);
    jobCardSmallBody.append(jobCardSpan2);
    jobCardSmallBody.append(jobCardSpan3);
    jobCard.append(jobCardSmallBody);

    //card footer
    let button1 = document.createElement("button");
    button1.className = "view_more_job";
    button1.innerHTML = "Learn More";
    let button2 = document.createElement("button");
    button2.className = "save_job";
    let imageb = document.createElement("img");
    imageb.src = "./assets/images/save-instagram-outline.png";
    button2.appendChild(imageb);
    let foot = document.createElement("div");
    foot.className = "category_card_foot";
    foot.appendChild(button1);
    foot.append(button2);
    jobCard.append(foot);
    // append card
    let results = document.querySelector("#results");
    results.appendChild(jobCard);
  });
} */

let modal = document.querySelector(".modal");
let modalCreationButton = document.querySelector(".view_more_job");
let modalCloseButton = document.querySelector(".close");

modalCloseButton.addEventListener("click", () => {
  modal.style.display = "none";
});

modalCreationButton.addEventListener("click", () => {
  modal.style.display = "block";
});

function createCardArray(element) {
  let jobCard = document.createElement("div");
  jobCard.className = "category_card";
  // card header
  let jobCardHeader = document.createElement("div");
  jobCardHeader.className = "category_card_header_info";
  let jobCardHeaderTitle = document.createElement("div");
  jobCardHeaderTitle.className = "job_desc_title";
  jobCardHeaderTitle.innerText = element.title;
  let jobCardHeaderdesc = document.createElement("div");
  jobCardHeaderdesc.className = "company_desc_name";
  jobCardHeaderdesc.innerText = element.company.display_name;
  jobCardHeader.appendChild(jobCardHeaderTitle);
  jobCardHeader.append(jobCardHeaderdesc);
  jobCard.append(jobCardHeader);
  // card description
  let jobCardBody = document.createElement("p");
  jobCardBody.className = "body_job_desc";
  jobCardBody.innerHTML = element.description;
  jobCardBody.style.overflow = "hidden";
  jobCard.append(jobCardBody);

  // small body
  let jobCardSmallBody = document.createElement("div");
  jobCardSmallBody.className = "body_job_info";
  let jobCardSpan1 = document.createElement("span");
  let jobCardSpan2 = document.createElement("span");
  let jobCardSpan3 = document.createElement("span");
  jobCardSpan1.className = "body_job_info_span";
  jobCardSpan2.className = "body_job_info_span";
  jobCardSpan3.className = "body_job_info_span";
  jobCardSpan1.innerText = element.contract_time;
  jobCardSpan2.innerText = element.location.area[1];
  jobCardSpan3.innerText = element.category.__CLASS__.label;
  jobCardSmallBody.appendChild(jobCardSpan1);
  jobCardSmallBody.append(jobCardSpan2);
  jobCardSmallBody.append(jobCardSpan3);
  jobCard.append(jobCardSmallBody);

  //card footer
  let button1 = document.createElement("button");
  button1.className = "view_more_job";
  button1.innerHTML = "Learn More";
  let button2 = document.createElement("button");
  button2.className = "save_job";
  let imageb = document.createElement("img");
  imageb.src = "./assets/images/save-instagram-outline.png";
  button2.appendChild(imageb);
  let foot = document.createElement("div");
  foot.className = "category_card_foot";
  foot.appendChild(button1);
  foot.append(button2);
  jobCard.append(foot);
  // append card
  let results = document.querySelector("#results");
  results.appendChild(jobCard);
}
/*  */
let jobForm = document.querySelector("#search_info");
jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let jobValue = document.querySelector("#job_search_value");
  let searchTerm = jobValue.value.split(" ");
  let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=${searchTerm[0]}%20${searchTerm[1]}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let exploreJob = document.querySelector("#explore");
      exploreJob.style.display = "none";
      let jobResults = data.results;
    });
  jobForm.reset();
});

document.addEventListener("DOMContentLoaded", createCardArray);
