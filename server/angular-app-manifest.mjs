
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28203, hash: '406be661280e33caeace31a9b370b91bd63e900acbf21a6399db4069673f8b18', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17215, hash: 'e53c5ce2a9335bb7bec49f104e91f1eb142683df55cd46a2866ccb513f317af0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35701, hash: '44751fd127b4b154810fb4ca973305bf6c4201c8382d9414bb1c05eee131f9cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JTSHUL47.css': {size: 238054, hash: 'bYumgCXwp1Q', text: () => import('./assets-chunks/styles-JTSHUL47_css.mjs').then(m => m.default)}
  },
};
