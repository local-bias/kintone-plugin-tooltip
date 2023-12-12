import { atom } from 'recoil';

const PREFIX = 'plugin';

export const pluginIdState = atom<string>({ key: `${PREFIX}pluginIdState`, default: '' });

export const storageState = atom<Plugin.Config | null>({
  key: `${PREFIX}storageState`,
  default: null,
});
