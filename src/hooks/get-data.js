const axios = require("axios");

const getData = async (endpoint) => {
  const data = await axios
    .get(`https://api-storage-fake-server.vercel.app/${endpoint}`)
    .then((data) => data)
    .catch((error) => console.log(error));

  return data;
};

module.exports = getData;
