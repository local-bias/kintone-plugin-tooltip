import { selector } from 'recoil';
import { getUserDefinedFields } from '@/lib/kintone-api';
import { kintoneAPI } from '@konomi-app/kintone-utilities';

const PREFIX = 'kintone';

export const appFieldsState = selector<kintoneAPI.FieldProperty[]>({
  key: `${PREFIX}appFieldsState`,
  get: async () => {
    const properties = await getUserDefinedFields();

    const values = Object.values(properties);

    return values.sort((a, b) => a.label.localeCompare(b.label, 'ja'));
  },
});
