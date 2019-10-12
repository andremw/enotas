import got from 'got';

import { ApiInstance } from './index';
import { joinWithSemicolon, withoutUndefined } from './util';

type SalesParams = {
  readonly filter?: string;
  readonly pageNumber?: number;
  readonly pageSize?: number;
  readonly orderBy?: number;
};

export enum WhenToIssueReceipt {
  // the receipt goes to issuing process right away
  AposVenda = 0,

  // the receipt goes to issuing process in the due date (property "vencimento")
  AposGarantia = 1,

  // the receipt will not be issued automatically, but only after a manual trigger
  NaoEmitir = 2,
}

export enum PaymentMethod {
  NaoInformado = 0,
  BoletoBancario = 1,
  CartaoCredito = 2,
  Deposito = 3,
  TransferenciaBancaria = 4,
  BCash = 5,
  PayPal = 6,
  Outro = 7,
}

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
  readonly quandoEmitirNFe?: WhenToIssueReceipt;
  readonly enviarNFeCliente?: boolean;
  readonly meioPagamento?: PaymentMethod;
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

export const createSale = (api: ApiInstance) => (sale: Sale): got.GotPromise<object> =>
  api.post('/vendas', { body: mapSale(sale) });

export const cancelSale = (api: ApiInstance) => (saleId: string) => api.post(`/vendas/${saleId}/cancelar`);
