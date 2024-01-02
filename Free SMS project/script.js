const url = "https://clicksend.p.rapidapi.com/sms/send";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    Authorization: "<REQUIRED>",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "68cc1e7b9bmsh3f2b4a3e3e949eap11757bjsn55e310e2a5e2",
    "X-RapidAPI-Host": "clicksend.p.rapidapi.com",
  },
  body: {
    messages: [
      {
        source: "mashape",
        from: "Test",
        body: "This is a test send by Ejaz Ali",
        to: "+923554166470",
        schedule: "1452244637",
        custom_string: "this is a test",
      },
    ],
  },
};
async function main() {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
}

let button = document.querySelector("#btn");
button.addEventListener("click", () => {
  main();
});
