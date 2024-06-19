import { list2 } from "./list.js";

const listaEditada = list2.map((it, i) => ({
  ...it,
  cd_produto: '34323' + i
}))


const listaEditada2 = list2.map((it, i) => ({
  ...it,
  cd_produto: '43533' + i
}))

const listaEditada3 = list2.map((it, i) => ({
  ...it,
  cd_produto: '4532343245' + i
}))


const listaEditada4 = list2.map((it, i) => ({
  ...it,
  cd_produto: '43543534643533' + i
}))


export const combo = {
  cd_combo: '12738217832',
  nm_combo: 'Combo promocional deus é mais',
  categorias: [
    {
      nm_categoria: 'ABSORVENTES',
      cd_categoria: '23842894',
      desconto_categoria: '5',
      min_produtos: 10,
      familias: [
        {
          cd_familia: '9043850',
          nm_familia: 'Always Noturno Suave',
          produtos: listaEditada,
        },
        {
          cd_familia: '9043850',
          nm_familia: 'Always Noturno Suave 2',
          produtos: listaEditada2
        }
      ]
    },
    {
      nm_categoria: 'BEBES',
      cd_categoria: '435343',
      desconto_categoria: '12',
      min_produtos: 19,
      familias: [
        {
          cd_familia: '904385034',
          nm_familia: 'Pampers 1',
          produtos: listaEditada3,
        },
        {
          cd_familia: '904384350',
          nm_familia: 'Pampers 12',
          produtos: listaEditada4
        }
      ]
    }
  ]

}