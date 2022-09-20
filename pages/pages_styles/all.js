let apiKey0 =
  "7235e19056860ded17d2185272909e6481fb893c2ce1c89ffbfbe8379d65eb0b";

let url0 =
  "https://www.themuse.com/api/public/jobs?items_per_page=100?category=Science%20and%20Engineering&page=1&descending=True?api_key=7235e19056860ded17d2185272909e6481fb893c2ce1c89ffbfbe8379d65eb0b?";

fetch(url0)
  .then((res) => res.json())
  .then((res) => console.log(res.results))
  .catch((err) => console.log(err));

let url2 = "https://devitjobs.uk/job_feed.xml";
fetch(url2).then((res) =>
  res
    .text()
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      console.log(data);
    })
);

let url1 = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=fullstack%20developer}`;
fetch(url1)
  .then((res) => res.json())
  .then((data) => console.log(data.results))
  .catch((err) => console.log(err));
