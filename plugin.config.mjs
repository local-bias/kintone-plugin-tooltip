//@ts-check
const hp = 'https://konomi.app/';
const cdn = 'https://kintone-plugin.konomi.app';
const key = 'tooltip';
const localhost = 'https://127.0.0.1:3940';

/** @type { import('@konomi-app/kintone-utilities').PluginConfig } */
export default {
  id: `ribbit-kintone-plugin-${key}`,
  pluginReleasePageUrl: `https://ribbit.konomi.app/kintone-plugin/`,
  manifest: {
    base: {
      manifest_version: 1,
      version: '2.1.0',
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
      icon: 'icon.png',
      homepage_url: { ja: hp, en: hp },
      desktop: { js: [`${cdn}/common/desktop.js`], css: [] },
      mobile: { js: [`${cdn}/common/desktop.js`], css: [] },
      config: {
        html: 'config.html',
        js: [`${cdn}/common/config.js`],
        css: [],
        required_params: [],
      },
    },
    dev: {
      desktop: {
        js: [`${localhost}/dist/dev/desktop.js`],
        css: [`${localhost}/dist/dev/desktop.css`],
      },
      mobile: {
        js: [`${localhost}/dist/dev/desktop.js`],
        css: [`${localhost}/dist/dev/desktop.css`],
      },
      config: {
        js: [`${localhost}/dist/dev/config.js`],
        css: [`${localhost}/dist/dev/config.css`],
      },
    },
    prod: {
      desktop: { js: [`${cdn}/${key}/desktop.js`], css: [`${cdn}/${key}/desktop.css`] },
      mobile: { js: [`${cdn}/${key}/desktop.js`], css: [`${cdn}/${key}/desktop.css`] },
      config: { js: [`${cdn}/${key}/config.js`], css: [`${cdn}/${key}/config.css`] },
    },
    standalone: {
      desktop: { js: ['desktop.js'], css: ['desktop.css'] },
      mobile: { js: ['desktop.js'], css: ['desktop.css'] },
      config: { js: ['config.js'], css: ['config.css'] },
    },
  },
};
