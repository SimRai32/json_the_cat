const request = require("request");
const args = process.argv;
const link = "https://api.thecatapi.com/v1/breeds/search?q=" + args[2];
const fetch = (link) => {
  request(link, (error, response, body) => {
    if (error) {
      return console.log(error);
    }
    if (body.length < 3) {
      return console.log("This is not a doggo breed :(");
    }
    const data = JSON.parse(body);
    return console.log(data[0]["description"]);
  });
};

fetch(link);