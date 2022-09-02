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
  jobCardSpan1.innerText = element.salary_min || element.salary_max ||"";
  jobCardSpan2.innerText = element.location.area[1];
  jobCardSpan3.innerText = element.category.__CLASS__.label || element.category.label;
  jobCardSmallBody.appendChild(jobCardSpan1);
  jobCardSmallBody.append(jobCardSpan2);
  jobCardSmallBody.append(jobCardSpan3);
  jobCard.append(jobCardSmallBody);

  //card footer
  let button1 = document.createElement("a");
  button1.setAttribute('href', element.redirect_url)
  button1.setAttribute('target', "_blank")
  button1.className = "view_more_job";
  button1.innerHTML = "Learn More";
  let button2 = document.createElement("button");
  button2.className = "save_job";
  let imageb = document.createElement("img");
  imageb.className = "save_image";
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

/* Dom Manipulation */
let mainPage = document.querySelector("main");
let catalogue = document.querySelector("#catalogue");
let explore = document.querySelector("#explore");
let search = document.querySelector("#search");
let jobForm = document.querySelector("#search_info");
let modal = document.querySelector("#modal");
let allResults = document.querySelector("#results");
let searchClose = document.querySelector(".close1");
let exploreJobCard1 = document.querySelector("#explore_job_card1");
let exploreJobCard2 = document.querySelector("#explore_job_card2");
let exploreJobCard3 = document.querySelector("#explore_job_card3");
let exploreJobCard4 = document.querySelector("#explore_job_card4");
let exploreJobCard5 = document.querySelector("#explore_job_card5");
let exploreContainer1 = document.querySelector("#explore_cont1");
let exploreContainer2 = document.querySelector("#explore_cont2");
let exploreJobCardAll1 = document.querySelector("#explore_job_card_all1");
let exploreJobCardAll2 = document.querySelector("#explore_job_card_all2");
let exploreJobCardAll3 = document.querySelector("#explore_job_card_all3");
let exploreJobCardAll4 = document.querySelector("#explore_job_card_all4");
let exploreJobCardAll5 = document.querySelector("#explore_job_card_all5");
function domManipulate() {
  searchClose.style.display = "none";
  modal.style.display = "none";
  explore.style.display = "none";
  search.style.display = "none";
  catalogue.addEventListener("click", () => {
    if (explore.style.display == "flex") {
      explore.style.display = "none";
      search.style.display = "none";
    } else {
      explore.style.display = "flex";
      search.style.display = "none";
    }
  });

  function exploreCategory1() {
    if (exploreJobCard2.style.display == "flex") {
      exploreJobCard1.style.display = "flex";
      exploreJobCard2.style.display = "none";
      exploreJobCard3.style.display = "none";
      exploreContainer2.style.display = "none";
      search.style.display = "flex";
      let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=frontend%20developer}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          allResults.innerHTML = "";
          searchClose.style.display = "flex";

          let jobResults = data.results.reverse();
          for (let i of jobResults) {
            createCardArray(i);
          }
        });
    } else {
      exploreJobCard2.style.display = "flex";
      exploreJobCard3.style.display = "flex";
      search.style.display = "flex";
      exploreContainer2.style.display = "flex";
    }
  }

  function exploreCategory2() {
    if (exploreJobCard3.style.display == "flex") {
      exploreJobCard1.style.display = "none";
      exploreJobCard2.style.display = "flex";
      exploreJobCard3.style.display = "none";
      exploreContainer2.style.display = "none";
      search.style.display = "flex";
      let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=machine%20learning}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          allResults.innerHTML = "";
          searchClose.style.display = "flex";

          let jobResults = data.results.reverse();
          for (let i of jobResults) {
            createCardArray(i);
          }
        });
    } else {
      exploreJobCard1.style.display = "flex";
      exploreJobCard3.style.display = "flex";
      exploreContainer2.style.display = "flex";
      search.style.display = "flex";
    }
  }

  function exploreCategory3() {
    if (exploreJobCard1.style.display == "flex") {
      exploreJobCard1.style.display = "none";
      exploreJobCard2.style.display = "none";
      exploreJobCard3.style.display = "flex";
      search.style.display = "flex";
      exploreContainer2.style.display = "none";
      let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=fullstack%20developer}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          allResults.innerHTML = "";
          searchClose.style.display = "flex";

          let jobResults = data.results.reverse();
          for (let i of jobResults) {
            createCardArray(i);
          }
        });
    } else {
      exploreJobCard1.style.display = "flex";
      exploreJobCard2.style.display = "flex";
      search.style.display = "flex";
      exploreContainer2.style.display = "flex";
    }
  }

  function exploreCategory4() {
    if (exploreJobCard5.style.display == "flex") {
      exploreJobCard4.style.display = "flex";
      exploreJobCard5.style.display = "none";
      search.style.display = "flex";
      exploreContainer1.style.display = "none";
      let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=mobile%20developer}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          allResults.innerHTML = "";
          searchClose.style.display = "flex";

          let jobResults = data.results.reverse();
          for (let i of jobResults) {
            createCardArray(i);
          }
        });
    } else {
      exploreJobCard5.style.display = "flex";
      search.style.display = "flex";
      exploreContainer1.style.display = "flex";
    }
  }

  function exploreCategory5() {
    if (exploreJobCard4.style.display == "flex") {
      exploreJobCard4.style.display = "none";
      exploreJobCard5.style.display = "flex";
      search.style.display = "flex";
      exploreContainer1.style.display = "none";
      let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=backend%20developer}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          allResults.innerHTML = "";
          searchClose.style.display = "flex";

          let jobResults = data.results.reverse();
          for (let i of jobResults) {
            createCardArray(i);
          }
        });
    } else {
      exploreJobCard4.style.display = "flex";
      search.style.display = "flex";
      exploreContainer1.style.display = "flex";
    }
  }

  jobForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let jobValue = document.querySelector("#job_search_value");
    let searchTerm = jobValue.value.split(" ");
    let url = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=${searchTerm[0]}%20${searchTerm[1]}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        allResults.innerHTML = "";
        searchClose.style.display = "flex";
        let exploreJob = document.querySelector("#explore");
        exploreJob.style.display = "none";
        let jobResults = data.results.reverse();
        for (let i of jobResults) {
          createCardArray(i);
        }
      });
    jobForm.reset();
  });

  searchClose.addEventListener("click", () => {
    allResults.innerHTML = "";
    explore.style.display = "flex";
    searchClose.style.display = "none";
    exploreJobCard1.style.display = "flex";
    exploreJobCard2.style.display = "flex";
    exploreJobCard3.style.display = "flex";
    exploreJobCard4.style.display = "flex";
    exploreJobCard5.style.display = "flex";
    exploreContainer1.style.display = "flex";
    exploreContainer2.style.display = "flex";
  });
  exploreJobCardAll1.addEventListener("click", exploreCategory1);
  exploreJobCardAll2.addEventListener("click", exploreCategory2);
  exploreJobCardAll3.addEventListener("click", exploreCategory3);
  exploreJobCardAll4.addEventListener("click", exploreCategory4);
  exploreJobCardAll5.addEventListener("click", exploreCategory5);
}

document.addEventListener("DOMContentLoaded", domManipulate);
