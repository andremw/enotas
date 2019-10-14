import got from 'got';

import { joinWithSemicolon, withoutUndefined } from './util';

type SalesParams = {
  readonly filter?: string;
  readonly pageNumber?: number;
  readonly pageSize?: number;
  readonly orderBy?: number;
};

type Sale = {
  readonly cliente?: {
    readonly id: string;
  };
  readonly data: string;
  readonly vencimento?: string;
  readonly produto: {
    readonly nome: string;
    readonly idExterno: string;
    readonly valorTotal: number;
    readonly diasGarantia: number;
    readonly tags: readonly string[];
  };
  readonly valorTotal: number;
  readonly quandoEmitirNFe?: number;
  readonly enviarNFeCliente?: boolean;
  readonly meioPagamento?: number;
  readonly tags?: readonly string[];
  readonly municipioPrestacao?: {
    readonly nome?: string;
    readonly codigoIbge?: number;
  };
  readonly dataCompetencia?: string;
  readonly discriminacao?: string;
  readonly valorTotalNFe?: number;
  readonly aliquotaIss?: number;
  readonly valorIss?: number;
  readonly issRetidoFonte?: boolean;
  readonly deducoes?: number;
  readonly observacoes?: string;
  readonly porcentagemCofins?: number;
  readonly porcentagemCsll?: number;
  readonly porcentagemInss?: number;
  readonly porcentagemIr?: number;
  readonly porcentagemPis?: number;
};

declare type ApiInstance = got.GotInstance<got.GotJSONFn>;

export const getSales = (api: ApiInstance) => ({
  filter,
  pageNumber,
  pageSize,
  orderBy,
}: SalesParams): got.GotPromise<object> => {
  const query = withoutUndefined({ filter, pageNumber, pageSize, orderBy });
  return api.get('/vendas/getFilterBy', { query });
};

const mapSale = (sale: Sale): object => ({
  ...sale,
  produto: {
    ...sale.produto,
    tags: joinWithSemicolon(sale.produto.tags),
  },
  tags: joinWithSemicolon(sale.tags || []),
});

export const createSale = (api: got.GotInstance<got.GotJSONFn>) => (sale: Sale): got.GotPromise<object> =>
  api.post('/vendas', { body: mapSale(sale) });
