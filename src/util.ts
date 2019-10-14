import { reject, isNil, join } from 'ramda';

export const withoutUndefined = reject(isNil);
export const joinWithSemicolon = join(';');
