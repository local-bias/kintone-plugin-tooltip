import { atom } from 'recoil';

const PREFIX = 'plugin';

export const storageState = atom<Plugin.Config | null>({
  key: `${PREFIX}storageState`,
  default: null,
});
