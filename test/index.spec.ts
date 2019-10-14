import nock from 'nock';
import enotasFactory from '../src/index';

const apiUrl = 'https://app.enotas.com.br/api';
const apiKey = 'apiKeyValue';

describe('eNotas API Wrapper', () => {
    it('throws when required params are not passed', () => {
        expect(() => {
            enotasFactory();
        }).toThrow(new Error('missing parameter "apiKey"'));

        expect(() => {
            enotasFactory({ apiKey: 'valid api key?' });
        }).not.toThrow();
    });

    describe('Sales requests', () => {
        it('GET sales passing query string params', async () => {
            const qs = {
                filter: 'data eq "2018-01-01" AND nfe/situacao eq "3"',
                pageNumber: 0,
                pageSize: 0,
                orderBy: 0,
            };

            const nockSales = nock(apiUrl)
                .matchHeader('Authorization', `Basic ${apiKey}`)
                .matchHeader('host', 'app.enotas.com.br')
                .get(`/vendas/getFilterBy`)
                .query(qs)
                .reply(200, '{}');

            const enotas = enotasFactory({ apiKey });

            const response = await enotas.getSales(qs);

            expect(nockSales.isDone()).toBe(true);
            expect(response.body).toStrictEqual({});
        });

        it('POST to create a sale', async () => {
            const nockSales = nock(apiUrl)
                .matchHeader('Authorization', `Basic ${apiKey}`)
                .matchHeader('host', 'app.enotas.com.br')
                .post('/vendas', {
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
                        tags: 'adestramento',
                    },
                    valorTotal: 5990,
                    quandoEmitirNFe: 1,
                    enviarNFeCliente: true,
                    meioPagamento: 2,
                    tags: 'exemplodevenda;exemplodetag2',
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
                })
                .reply(200, { vendaId: 'xx-some-hash-here' });

            const enotas = enotasFactory({ apiKey });
            const response = await enotas.createSale({
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
                quandoEmitirNFe: 1,
                enviarNFeCliente: true,
                meioPagamento: 2,
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
            });

            expect(nockSales.isDone()).toBe(true);
            expect(response.body).toStrictEqual({
                vendaId: 'xx-some-hash-here',
            });
        });
    });
});
