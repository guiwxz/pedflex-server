import express from 'express';
import cors from 'cors';
import { list2 } from './mocks/list.js';
import { header } from './mocks/header.js';
import { lista, headerStevan } from './mocks/stevan.js';
import { combo } from './mocks/combo.js';
import { lucasHeader } from './mocks/lucasHeader.js';
import { lucasList, lucasList2 } from './mocks/lucasList.js';
import {
  ListaNegociacao,
  ListaNegociacao2,
} from './mocks/lucasListaNegociacao.js';
import { listaProdutosCombo } from './mocks/listaProdutosCombo.js';

const server = express();

server.use(express.json());
server.use(cors());
server.use('/lista-produto', (req, res) => {
  // const { cd_condicao } = req.query

  // const valueMultiplier = cd_condicao % 2 == 0 ? 0.2 : 1

  // return res.json(list2.map(it => ({
  //   ...it,
  //   nm_produto: `${cd_condicao} - ${it.nm_produto}`,
  //   unidades_disponiveis: it.unidades_disponiveis.map(unit => ({
  //     ...unit,
  //     vl_preco_unidade: unit.vl_preco_unidade * valueMultiplier,
  //   }))
  // })))
  // const { cd_lista_transmissao } = req.query;
  // return res.json(cd_lista_transmissao == 476 ? lucasList2 : lucasList);
  return res.json(lucasList);

  readFile('./produtos.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return res.json({ lista_produto: JSON.parse(data).slice(start, end) });
  });
});

server.use('/header', (req, res) => {
  return res.json(lucasHeader);
});

server.use('/lista-negociacao', (req, res) => {
  // const { cd_lista_transmissao } = req.query;

  // return res.json(
  //   cd_lista_transmissao == 476 ? ListaNegociacao2 : ListaNegociacao
  // );
  return res.json(ListaNegociacao);

  readFile('./negociacao.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return res.json({ lista_produto: JSON.parse(data).slice(start, end) });
  });
});

server.use('/lista-combo', (req, res) => {
  return res.json(combo);
});

server.use('/lista-grupo-ativacao-produto', (req, res) => {
  return res.json(listaProdutosCombo);
});

server.listen(process.env.PORT || 3333, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${
      process.env.PORT || 3333
    }`
  );
});
