
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
    'index.csr.html': {size: 28208, hash: '1ad982ee4cee352258a3705103591fda1a9aa3508a6591c9a0137ab1661fdc28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17220, hash: '81f348edaa79290455878f28216d7f6b242a3d2490297ded1319d5940370bfa1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35706, hash: '87709c325768a0b437310537bf12d6d3473f24f8960e55608281c3404085e6b4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JTSHUL47.css': {size: 238054, hash: 'bYumgCXwp1Q', text: () => import('./assets-chunks/styles-JTSHUL47_css.mjs').then(m => m.default)}
  },
};
