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
    it('request sales passing query string params', async () => {
      const qs = {
        filter: 'data eq "2018-01-01" AND nfe/situacao eq "3"',
        pageNumber: 0,
        pageSize: 0,
        orderBy: 0
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
  });
});
