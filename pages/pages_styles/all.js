/* ========================Arbeit Now api============Failed==================== */
/* var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://arbeitnow.com/api/job-board-api", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error)); */

/* open skills ========================Timed out======================================= */

/* let url = "http://api.dataatwork.org/v1/";

fetch(url)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */

/* Reed api =========================================Error======================================  */

/* let username = "abdb8ea5-2120-443f-8246-7442a083e2b2";
let password = "";

let url =
  "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london";

let reqOptions = {
  method: "GET",
  mode: "no-cors",
  headers: {
    Authorization: "Basic " + btoa("abdb8ea5-2120-443f-8246-7442a083e2b2=="),
  },
};

fetch(url, reqOptions)
  .then((response) => response.json())
  .then((json) => console.log(json)); */

/*  udemy api=========failed============================================== */

// Call the API
// This is a POST request, because we need the API to generate a new token for us

/* let key = " M8MBZMxs96KD52PJl6QRQ9JuiRMgGHL7zlQDiZtM";

let secret =
  " Cln0LIUPycJeUMBZ22kiEl1MTNlOBTEVUJtrbHlg9ocba1CNcrkp9tPRWFniYbCArBYTcnHpKXmxQRuTISaqLvyBhFxxM3B2EZje0vzDy0Tgh1VppI9GLwbAus1IEGIi";

let url =
  "https://www.udemy.com/api-2.0/courses/?page=1&page_size=10000&search=python&language=en";

fetch(url, {
  method: "GET",
  headers: new Headers({
    Authorization:
      "Basic" +
      btoa(
        "IE04TUJaTXhzOTZLRDUyUEpsNlFSUTlKdWlSTWdHSEw3emxRRGladE06IENsbjBMSVVQeWNKZVVNQloyMmtpRWwxTVRObE9CVEVWVUp0cmJIbGc5b2NiYTFDTmNya3A5dFBSV0ZuaVliQ0FyQllUY25IcEtYbXhRUnVUSVNhcUx2eUJoRnh4TTNCMkVaamUwdnpEeTBUZ2gxVnBwSTlHTHdiQXVzMUlFR0lp"
      ),
    "Content-Type": "application/x-www-form-urlencoded",
   // "Access-Control-Allow-Origin": "**",
    mode: "no-cors",
  }),
})
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); */

/* The muse ========================================================================= */

let apiKey = "7235e19056860ded17d2185272909e6481fb893c2ce1c89ffbfbe8379d65eb0b";

let url =
  "https://www.themuse.com/api/public/jobs?items_per_page=100?category=Science%20and%20Engineering&page=1&descending=True?api_key=7235e19056860ded17d2185272909e6481fb893c2ce1c89ffbfbe8379d65eb0b?";

fetch(url)
  .then((res) => res.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/* ================================== Dev IT jobs =============================  */

/* let url = "https://devitjobs.uk/job_feed.xml";
fetch(url).then((res) =>
  res
    .text()
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      console.log(data);
    })
); */

/* ================================Adzunna Api=============================================== */

/* let url1 = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f&results_per_page=1000&what=fullstack%20developer}`;
fetch(url1)
  .then((res) => res.json())
  .then((data) => console.log(data.results))
  .catch((err) => console.log(err)); */
