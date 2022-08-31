/*

Adzuna jobs

let url =
  "https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=d0291057&app_key=e45310af6518f33ea0f2617638ff1d7f";

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
  .then((data) => console.log(data.results))
  .catch((error) => console.log("error", error)); */

let udemy_client_id = "M8MBZMxs96KD52PJl6QRQ9JuiRMgGHL7zlQDiZtM";
let udemy_client_secret =
  "Cln0LIUPycJeUMBZ22kiEl1MTNlOBTEVUJtrbHlg9ocba1CNcrkp9tPRWFniYbCArBYTcnHpKXmxQRuTISaqLvyBhFxxM3B2EZje0vzDy0Tgh1VppI9GLwbAus1IEGIi";
let url =
  "https://www.udemy.com/api-2.0/courses/238934/?fields[course]=title,headline";

/* head = {
  method: "GET",
  mode: "cors",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
}; */

let ter = btoa(udemy_client_id + ":" + udemy_client_secret);

let headers = new Headers();
headers.set(
  "Authorization",
  "Basic" + btoa(udemy_client_id + ":" + udemy_client_secret)
);
let cors =
  "Access-Control-Allow-Origin: https://www.udemy.com/api-2.0/courses/238934/?fields[course]=title,headline";
fetch(url, {
  method: "GET",
  mode: "cors",
  credentials: "same-origin",
  headers: {
    Authorization: `Basic + ${ter}`,
    "Access-Control-Allow-Origin": "http://127.0.0.1:5501",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data.results))
  .catch((error) => console.log("error", error));
