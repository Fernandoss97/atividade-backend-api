import { app } from "./src/index.js";

const serverPort = 3000;

app.listen(serverPort, () => {
  console.log(`Server listening at localhost:${serverPort}`);
});
