import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response.js";
import logger from "./util/logger.js";
import HttpStatus from "./controller/patient.controller.js";
import patientRoutes from "./route/patient.route.js";

dotenv.config();
// run the command `SERVER_PORT=5000 npm run start:dev` to overrode the port
const PORT = process.env.SERVER_PORT || 3000;

const app = express();
// bad practice to use this, but for now it works
app.use(
  cors({
    origin: "*",
  })
);

console.log(process.env);
app.use(express.json());
app.use("/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send(
    new Response(HttpStatus.OK.code, HttpStatus.OK.status, "Hello World", {
      ip: ip.address(),
    })
  );
});

app.all("*", (req, res) =>
  res
    .status(HttpStatus.NOT_FOUND.code)
    .send(
      new Response(
        HttpStatus.NOT_FOUND.code,
        HttpStatus.NOT_FOUND.status,
        "Route does not exist on the server"
      )
    )
);
app.listen(PORT, () => {
  logger.info(`Server is running on ${PORT}`);
});
