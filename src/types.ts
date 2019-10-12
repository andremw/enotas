export interface ISale {
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
}
