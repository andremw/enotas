import { listFeature, getFeature, createFeature, cancelFeature } from '../../src/_generic/features';
import { ApiInstance } from '../../src';

describe('Generic Features', () => {
  const fakeApi = {} as ApiInstance;
  const fakeApiUri = '/foo';

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('constructs listFeature correctly', () => {
    const fakeReturn = 'listResponse';
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = listFeature(fakeApiUri)(fakeApi);

    fakeApi['get'] = mock;

    expect(feature({})).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}/getFilterBy`, { query: {} });
  });

  it('constructs getFeature correctly', () => {
    const fakeReturn = 'getResponse';
    const fakeId = '1';
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = getFeature(fakeApiUri)(fakeApi);

    fakeApi['get'] = mock;

    expect(feature(fakeId)).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}/${fakeId}`);
  });

  it('constructs createFeature correctly', () => {
    const fakeReturn = 'createResponse';
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = createFeature(fakeApiUri)(fakeApi);
    const fakeBody = { foo: 'bar', fizz: 'fuzz' };

    fakeApi['post'] = mock;

    expect(feature(fakeBody)).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}`, { body: fakeBody });
  });

  it('constructs cancelFeature correctly', () => {
    const fakeReturn = 'cancelResponse';
    const fakeId = '1';
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = cancelFeature(fakeApiUri)(fakeApi);

    fakeApi['post'] = mock;

    expect(feature(fakeId)).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}/${fakeId}/cancelar`);
  });
});
