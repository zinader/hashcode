
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/hashcode'                // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Hashcode'                    // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'zinader',                    // --> your github username (where your repo is hosted)
      repo: 'hashcode',                   // --> your github repo name
    }
  },
});
