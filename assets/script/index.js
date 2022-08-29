let url = "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15";
const apiKey = "abdb8ea5-2120-443f-8246-7442a083e2b2"
fetch(url)
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  });
