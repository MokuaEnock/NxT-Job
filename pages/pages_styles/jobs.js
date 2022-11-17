/* // The muse api
let apiKey0 =
  "7235e19056860ded17d2185272909e6481fb893c2ce1c89ffbfbe8379d65eb0b";
let url0 =
  "https://www.themuse.com/api/public/jobs?items_per_page=100?category=Science%20and%20Engineering&page=1&descending=True?api_key=7235e19056860ded17d2185272909e6481fb893c2ce1c89ffbfbe8379d65eb0b?";
fetch(url0)
  .then((res) => res.json())
  .then((res) => console.log(res.results))
  .catch((err) => console.log(err));

// Dev it jobs
let url2 = "https://devitjobs.uk/job_feed.xml";
fetch(url2).then((res) =>
  res
    .text()
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      console.log(data);
    })
);

// Adzunna job api
let url1 = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=fullstack%20developer}`;
fetch(url1)
  .then((res) => res.json())
  .then((data) => console.log(data.results))
  .catch((err) => console.log(err));
 */

/* Getting page dom elements */

let exploreJobCategoryButton1 = document.querySelector(
  "#explore_job_card_all1"
);

let exploreJobCategoryButton2 = document.querySelector(
  "#explore_job_card_all2"
);
let exploreJobCategoryButton3 = document.querySelector(
  "#explore_job_card_all3"
);
let exploreJobCategoryButton4 = document.querySelector(
  "#explore_job_card_all4"
);
let exploreJobCategoryButton5 = document.querySelector(
  "#explore_job_card_all5"
);

//create a card using html
function jobCardArray(element) {
  //card container
  let jobCard = document.createElement("div");
  jobCard.className = "category_card";

  //card_header
  let category_card_heading = document.createElement("div");
  category_card_heading.className = "category_card_heading";
  let category_card_heading1 = document.createElement("p");
  category_card_heading1.className = "category_card_heading1";
  let category_card_heading2 = document.createElement("p");
  category_card_heading2.className = "category_card_heading2";
  //append card header to card conatiner
  category_card_heading.appendChild(category_card_heading1);
  category_card_heading.append(category_card_heading2);
  jobCard.appendChild(category_card_heading);

  //card body
  let category_card_body = document.createElement("p");
  category_card_body.className = "category_card_body";
  //append card_body to card container
  jobCard.appendChild(category_card_body);

  //card info
  let category_card_info = document.createElement("div");
  category_card_info.className = "category_card_info";
  let body_job_info_span = document.createElement("span");
  body_job_info_span.className = "category_job_info";
  //append card info into crad body
  category_card_info.appendChild(body_job_info_span);
  jobCard.append(category_card_info);

  //card footer
  let category_card_footer = document.createElement("div");
  category_card_footer.className = "category_card_footer";
  let category_card_image = document.createElement("button");
  category_card_image.className = "category_card_image";
  let category_card_learn_more = document.createElement("a");
  category_card_learn_more.className = "category_card_learn_more";
  let category_card_image_image = document.createElement("img");
  category_card_image_image.className = "category_card_image_image";
  //append fooetr inot card container
  category_card_image.append(category_card_image_image);
  category_card_footer.appendChild(
    category_card_learn_more,
    category_card_image
  );
}

// create array of job category buttons
category_buttons = new Array();
category_buttons.push(
  exploreJobCategoryButton1,
  exploreJobCategoryButton2,
  exploreJobCategoryButton3,
  exploreJobCategoryButton4,
  exploreJobCategoryButton5
);

/* category_buttons.forEach((element) => {
  console.log(element);
});
 */

function fname(category_buttons) {
  for (let i of category_buttons) {
    console.log(i);
  }
}
fname(category_buttons);

exploreJobCategoryButton1.addEventListener("click", () => {
  if (exploreJobCategoryButton1.style.display == !"none") {
    exploreJobCategoryButton1 === "flex";
  } else {
    exploreJobCategoryButton1.style.display == "none";
  }
});
