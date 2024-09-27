require('dotenv').config()  // Forma diferente de hacer import

const jsonServer = require("json-server"); // to start building the server

const server = jsonServer.create(); // to create the Server Object. All BE logic will start from it.

const middlewares = jsonServer.defaults(); // to set common configurations from the jsonServer library
server.use(middlewares);

const allowAccessFromAnywhere = (req, res, next) => {
  // this function makes the code accesible from anywhere
  res.header("Access-Control-Allow-Origin", "*");   // CORS: política para que dos programas puedan acceder entre ellos a no ser que el dev lo permita
  next();
}
server.use(allowAccessFromAnywhere)

const router = jsonServer.router("db.json"); // automatically creates all CRUD routes for a DB as a json file
server.use(router);

const PORT = process.env.PORT;

server.listen(PORT, () => {   // Escuchando, se cierra con ctrl+c
  console.log(`JSON Server is running at port ${PORT}`);
  console.log(`Local Access at http://localhost:${PORT}`)
});