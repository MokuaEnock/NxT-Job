/* Dev IT jobs  */

let url = "https://devitjobs.uk/job_feed.xml";
fetch(url).then((res) =>
  res
    .text()
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => console.log(data))
);
