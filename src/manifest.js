
module.exports = {
  name: 'Smart New Tab',
  version: '1.1.2',
  description: 'A smarter new tab page for everyone',
  author: 'support@bewisse.com',
  manifest_version: 2,
  icons: {
    '16': 'icons/16.png',
    '24': 'icons/24.png',
    '32': 'icons/32.png',
    '48': 'icons/48.png',
    '64': 'icons/64.png',
    '128': 'icons/128.png'
  },
  background: {
    scripts: ['background.js']
  },
  browser_action: {
    default_icon: {
      '16': 'icons/16.png',
      '24': 'icons/24.png',
      '48': 'icons/48.png',
      '64': 'icons/64.png',
      '128': 'icons/128.png'
    },
    default_popup: 'popup/popup.html'
  },
  permissions: [
    'chrome://favicon/',
    'https://www.google.com/*',
    'storage'
  ],
  optional_permissions: [
    'tabs',
    'clipboardRead',
    'topSites',
    'history',
    'management',
    'sessions'
  ],
  chrome_url_overrides: {
    newtab: 'pages/newtab.html'
  },
  content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'"
}
