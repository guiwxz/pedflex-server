export const combo = {
  lista_combo: [
    {
      cd_combo: 111,
      nm_combo: 'Combo Mockado 111',
      cd_marca: 22359813,
      parametros: [
        {
          cd_combo: 111,
          qt_grupo_ativacao: 0,
          pr_geracao: 0,
        },
        {
          cd_combo: 111,
          qt_grupo_ativacao: 5,
          pr_geracao: 5,
        },
      ],
      ga_ativados: [],
      categorias: [
        {
          cd_combo: 111,
          cd_categoria_combo: 1111,
          nm_categoria_combo: 'Categoria Mockada 1111',
          pr_desconto: 5,
          qt_minima: 1,
          ds_unidade_plus: null,
          grupos_ativacao: [
            {
              cd_combo: 111,
              produtos: [
                {
                  cd_produto: 77690003162,
                  qt_multiplicador: 1,
                  cd_unidade_medida: null,
                },
                {
                  cd_produto: 77690000122,
                  qt_multiplicador: 1,
                  cd_unidade_medida: null,
                },
                {
                  cd_produto: 1234,
                  qt_multiplicador: 1,
                  cd_unidade_medida: null,
                },
                {
                  cd_produto: 4321,
                  qt_multiplicador: 1,
                  cd_unidade_medida: null,
                },
              ],
              qt_minima: 20,
              id_contabiliza: 1,
              cd_grupo_ativacao: 11111,
              nm_grupo_ativacao: 'Grupo Ativação Mockado 11111(Contabiliza)',
              cd_categoria_combo: 1111,
            },
            {
              cd_combo: 111,
              produtos: [
                {
                  cd_produto: 77690003748,
                  qt_multiplicador: 1,
                  cd_unidade_medida: null,
                },
                {
                  cd_produto: 8765,
                  qt_multiplicador: 1,
                  cd_unidade_medida: null,
                },
              ],
              qt_minima: 10,
              id_contabiliza: 0,
              cd_grupo_ativacao: 11112,
              nm_grupo_ativacao:
                'Grupo Ativação Mockado 11112 (Não contabiliza)',
              cd_categoria_combo: 1111,
            },
          ],
        },
      ],
    },
  ],
};
