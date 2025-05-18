
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/soma/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/soma"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28208, hash: '8b226e3ececdc79986a69e11c385d204a090a1209fc0ee71c8f67463ae2a6d96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17220, hash: '0f25fa14e5bfadbb32945cf1fd26d07e2c18608d16dd5d6d7b54ec28149fc7e2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35706, hash: '0aeb41b0f15a25d7814c07fe24901b020a403fcb9e62a0188878305c540fda00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JTSHUL47.css': {size: 238054, hash: 'bYumgCXwp1Q', text: () => import('./assets-chunks/styles-JTSHUL47_css.mjs').then(m => m.default)}
  },
};
