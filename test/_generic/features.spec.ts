import { listFeature, getFeature, createFeature } from '../../src/_generic/features';
import { ApiInstance } from '../../src';

describe('Generic Features', () => {
  const fakeApi = {} as ApiInstance;
  const fakeApiUri = '/foo';

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should construct listFeature correctly', () => {
    const fakeReturn = 'listResponse';
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = listFeature(fakeApiUri)(fakeApi);

    fakeApi['get'] = mock;

    expect(feature({})).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}/getFilterBy`, { query: {} });
  });

  it('should construct getFeature correctly', () => {
    const fakeReturn = 'getResponse';
    const fakeId = 1;
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = getFeature(fakeApiUri)(fakeApi);

    fakeApi['get'] = mock;

    expect(feature(fakeId)).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}/${fakeId}`);
  });

  it('should construct createFeature correctly', () => {
    const fakeReturn = 'createResponse';
    const mock = jest.fn().mockReturnValue(fakeReturn);
    const feature = createFeature(fakeApiUri)(fakeApi);
    const fakeBody = { foo: 'bar', fizz: 'fuzz' };

    fakeApi['post'] = mock;

    expect(feature(fakeBody)).toBe(fakeReturn);
    expect(mock).toBeCalledWith(`${fakeApiUri}`, { body: fakeBody });
  });
});
