// const validationNumber = require("./hooks/validation-number");
const app = require("./config.app");
const getData = require("./hooks/get-data");

try {
  // Verifiend Endpoint
  app.use((req, res, next) => {
    if (req.query.endpoint) {
      next();
      return;
    }
    res.status(405).send("Não enviou o Endpoint");
  });

  app.get("/", async (req, res) => {
    const endpoint = req.query.endpoint;
    let response = await getData(endpoint);

    console.log(response);
    if (response.status !== 200)
      res.status(501).send("Não foi possivel processar a requisição.");

    res.status(200).send(response.data);
  });

  app.listen(3333, () => console.log("server running on port 3333"));
} catch (error) {
  return error;
}
