
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/soma/browser',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/soma/browser"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28215, hash: '73f76efedf3c1cafe4832ab2e8ea9b3e95f1b3836367d99c9062e94a40881a8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17227, hash: 'e50dafebdfc611a3421ee8912930ae06d3dab828d89862fe9b992ce00c8dcbc1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35713, hash: '4b19c3cb9e1b573f953812e00c9fa938ee53b13ba8f67421555cb0413c8a2530', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JTSHUL47.css': {size: 238054, hash: 'bYumgCXwp1Q', text: () => import('./assets-chunks/styles-JTSHUL47_css.mjs').then(m => m.default)}
  },
};
