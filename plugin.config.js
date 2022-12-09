/** @type {import('./src/types/plugin-config').PluginConfig} */
module.exports = {
  manifest: {
    base: {
      manifest_version: 1,
      version: 111,
      type: 'APP',
      name: {
        en: 'Tool chip plugin',
        ja: 'ツールチップ プラグイン',
        zh: '工具提示插件',
      },
      description: {
        en: 'Add an icon to a specific field and display a hint when the cursor is combined.',
        ja: '特定のフィールドにアイコンを追加し、カーソルを合わせた際にヒントを表示します。',
        zh: '将图标添加到特定字段并在您将鼠标悬停在该字段上时显示提示',
      },
      icon: 'image/icon.png',
      homepage_url: {
        ja: 'https://ribbit.konomi.app/',
        en: 'https://ribbit.konomi.app/',
      },
      desktop: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest/dist/desktop.js'],
        css: [],
      },
      mobile: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest/dist/desktop.js'],
        css: [],
      },
      config: {
        html: 'html/config.html',
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-cdn@latest/dist/config.js'],
        css: [],
        required_params: [],
      },
    },
    dev: {
      desktop: { js: ['desktop.js'] },
      mobile: { js: ['desktop.js'] },
      config: { js: ['config.js'] },
    },
    prod: {
      desktop: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-tooltip@latest/cdn/desktop.js'],
      },
      mobile: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-tooltip@latest/cdn/desktop.js'],
      },
      config: {
        js: ['https://cdn.jsdelivr.net/gh/local-bias/kintone-plugin-tooltip@latest/cdn/config.js'],
      },
    },
  },
};
