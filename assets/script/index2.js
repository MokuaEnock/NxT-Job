url = "https://weworkremotely.com/api/v1/remote-jobs/remote-jobs";

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
