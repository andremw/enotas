import { getSales, createSale, ApiInstance, WhenToIssueReceipt, PaymentMethod } from '../src/index';

describe('eNotas API Wrapper', () => {
  describe('Sales requests', () => {
    it('GET sales passing query string params', async () => {
      const qs = {
        filter: 'data eq "2018-01-01" AND nfe/situacao eq "3"',
        pageNumber: 0,
        pageSize: 0,
        orderBy: 0,
      };

      const api = ({
        get: jest.fn(),
      } as unknown) as ApiInstance;

      await getSales(api)(qs);

      expect(api.get).toHaveBeenCalledWith('/vendas/getFilterBy', {
        query: qs,
      });
    });

    it('POST to create a sale', async () => {
      const api = ({
        post: jest.fn(),
      } as unknown) as ApiInstance;

      const postBody = {
        cliente: {
          id: 'client-id',
        },
        data: '31/08/2016',
        vencimento: '10/09/2016',
        produto: {
          nome: 'Como adestrar cachorros',
          idExterno: '324',
          valorTotal: 29,
          diasGarantia: 30,
          tags: ['adestramento'],
        },
        valorTotal: 5990,
        quandoEmitirNFe: WhenToIssueReceipt.AposGarantia,
        enviarNFeCliente: true,
        meioPagamento: PaymentMethod.CartaoCredito,
        tags: ['exemplodevenda', 'exemplodetag2'],
        municipioPrestacao: {
          nome: 'Belo Horizonte',
          codigoIbge: 3106200,
        },
        dataCompetencia: '10/09/2016',
        discriminacao: 'Consultoria Financeira Master',
        valorTotalNFe: 5990,
        aliquotaIss: 0,
        valorIss: 0,
        issRetidoFonte: false,
        deducoes: 0,
        observacoes: '',
        porcentagemCofins: 1.5,
        porcentagemCsll: 2.2,
        porcentagemInss: 3,
        porcentagemIr: 4.3,
        porcentagemPis: 5,
      };

      await createSale(api)(postBody);

      expect(api.post).toHaveBeenCalledWith('/vendas', {
        body: {
          ...postBody,
          produto: {
            ...postBody.produto,
            tags: 'adestramento',
          },
          tags: 'exemplodevenda;exemplodetag2',
        },
      });
    });
  });
});
