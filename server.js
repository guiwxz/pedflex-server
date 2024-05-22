import express from "express";
import cors from "cors";
import { list2 } from "./mocks/list.js";
import { header } from "./mocks/header.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use("/list", (req, res) => {
  const { cd_condicao } = req.query
  return res.json(list2.map(it => ({
    ...it,
    nm_produto: `${cd_condicao} - ${it.nm_produto}`
  })))
});

server.use("/header", (req, res) => {

  return res.json(header)
});

server.listen(process.env.PORT || 3333, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT || 3333}`);
});
