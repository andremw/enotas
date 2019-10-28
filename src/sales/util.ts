import { evolve } from 'ramda';

import { joinWithSemicolon } from '../util';

export const mapSale = evolve({
  produto: {
    tags: joinWithSemicolon,
  },
  tags: joinWithSemicolon,
});
