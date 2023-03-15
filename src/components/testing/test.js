const test_url = "https://geo.ipify.org/api/v2/country?";
const apiKey = "at_gtxE4ztYdEzHBWpvl9jZHin1qdaBW";
const ipAddress = "8.8.8.8";

const concat_url = test_url + "apiKey=" + apiKey + "&ipAddress=" + ipAddress;
console.log(concat_url);

// const headersList = {
//   Accept: "*/*",
// };

fetch(concat_url, {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw Error("something went wrong");
    }
    return response.json();
  })
  .then((data) => {
    console.log("data below");
    console.log(data.location.country);
  });
