import { hello } from '../src';

describe('index.tsx', () => {
    it('test hello', () => {
        expect(hello()).toBe('Hello World!');
    });
});
