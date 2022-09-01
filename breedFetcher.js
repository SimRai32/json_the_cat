const request = require("request");
const fetchBreedDescription = (breed, callback) => {
  const link = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;
  request(link, (error, response, body) => {
    if (error) {
      console.log(error);
      callback(error);
    }
    if (body.length < 3) {
      console.log("This is not a doggo breed :(");
      callback(null, body);
    }
    if (body.length > 3) {
      const data = JSON.parse(body);
      const description = data[0]["description"];
      return callback(null,description);
    }
  });
};

const output = (error, body) => {
  if (error) {
    console.log(error);
    return error;
  }
  
  return body;
  
};
module.exports = { fetchBreedDescription, output };