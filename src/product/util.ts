import { evolve } from 'ramda';

import { joinWithSemicolon } from '../util';

export const mapProduct = evolve({
  produto: {
    tags: joinWithSemicolon,
  },
  tags: joinWithSemicolon,
});
