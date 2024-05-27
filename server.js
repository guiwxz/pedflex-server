import express from "express";
import cors from "cors";
import { list2 } from "./mocks/list.js";
import { header } from "./mocks/header.js"; import { lista, headerStevan } from "./mocks/stevan.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use("/list", (req, res) => {
  const { cd_condicao } = req.query

  const valueMultiplier = cd_condicao % 2 == 0 ? 0.2 : 1

  return res.json(list2.map(it => ({
    ...it,
    nm_produto: `${cd_condicao} - ${it.nm_produto}`,
    unidades_disponiveis: it.unidades_disponiveis.map(unit => ({
      ...unit,
      vl_preco_unidade: unit.vl_preco_unidade * valueMultiplier,
    }))
  })))
});

server.use("/header", (req, res) => {

  return res.json(headerStevan)
});

server.listen(process.env.PORT || 3333, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT || 3333}`);
});
