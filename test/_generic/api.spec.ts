jest.mock('got');

import got, { GotJSONFn, GotInstance } from 'got';
import ApiFactory from '../../src/_generic/api';

const mockedGot = got as jest.Mocked<typeof got>;

describe('Generic Api', () => {
  it('should', () => {
    const factoryData = { apiKey: 'foo' };
    const mockValue = {} as GotInstance<GotJSONFn>;

    mockedGot.extend.mockReturnValue(mockValue);

    expect(ApiFactory(factoryData)).toBe(mockValue);
    expect(mockedGot.extend).toBeCalledWith({
      baseUrl: 'https://app.enotas.com.br/api',
      headers: {
        Authorization: `Basic ${factoryData.apiKey}`,
      },
      json: true,
    });
  });
});
