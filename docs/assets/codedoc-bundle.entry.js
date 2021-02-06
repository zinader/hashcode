import { getRenderer } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { ToCPrevNext } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/pulkitaggarwal/Desktop/hello/hashcode/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';

const components = {
  'rfybMtxsAE+F5GAfaW4pAQ==': ToCPrevNext,
  'i3azrWI5cqHpynbN8VnTzA==': GithubSearch,
  'x0ixET96zCHdIHGY3AbiWA==': ToCToggle,
  'wJ+ghe7s1Hj6NBgbv4Wb7w==': DarkModeSwitch,
  'iAmSRR6o53LtpKoRnPtKGQ==': ConfigTransport
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
