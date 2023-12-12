import { getUpdatedStorage, restorePluginConfig } from '@/lib/plugin';
import { RecoilState, atom, selectorFamily } from 'recoil';

const PREFIX = 'plugin';

export const storageState = atom<Plugin.Config>({
  key: `${PREFIX}storageState`,
  default: restorePluginConfig(),
});

const conditionPropertyState = selectorFamily<
  Plugin.Condition[keyof Plugin.Condition],
  [number, keyof Plugin.Condition]
>({
  key: `${PREFIX}conditionPropertyState`,
  get:
    ([index, key]) =>
    ({ get }) => {
      const storage = get(storageState);
      return storage.conditions[index][key];
    },
  set:
    ([index, key]) =>
    ({ set }, newValue) => {
      set(storageState, (current) =>
        getUpdatedStorage(current, {
          conditionIndex: index,
          key,
          value: newValue as Plugin.Condition[keyof Plugin.Condition],
        })
      );
    },
});

export const getConditionPropertyState = <T extends keyof Plugin.Condition>(params: {
  property: T;
  index: number;
}) =>
  conditionPropertyState([params.index, params.property]) as unknown as RecoilState<
    Plugin.Condition[T]
  >;
