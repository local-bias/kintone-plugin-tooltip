import { restoreStorage } from '@konomi-app/kintone-utilities';
import { PLUGIN_ID } from './global';
import { produce } from 'immer';

export const getNewCondition = (): Plugin.Condition => ({
  fieldCode: '',
  label: '',
  type: 'icon',
  iconType: 'info',
  iconColor: '#9ca3af',
  emoji: '😀',
});

/**
 * プラグインの設定情報のひな形を返却します
 */
export const createConfig = (): Plugin.Config => ({
  version: 2,
  conditions: [getNewCondition()],
});

/**
 * 古いバージョンの設定情報を新しいバージョンに変換します
 * @param anyConfig 保存されている設定情報
 * @returns 新しいバージョンの設定情報
 */
export const migrateConfig = (anyConfig: Plugin.AnyConfig): Plugin.Config => {
  const { version } = anyConfig;
  switch (version) {
    case undefined:
    case 1:
      return {
        version: 2,
        conditions: anyConfig.conditions.map((condition) => ({
          fieldCode: condition.field,
          label: condition.label,
          type: 'icon',
          iconType: 'info',
          iconColor: '#9ca3af',
          emoji: '😀',
        })),
      };
    default:
      return anyConfig;
  }
};

/**
 * プラグインの設定情報を復元します
 */
export const restorePluginConfig = (): Plugin.Config => {
  const config = restoreStorage<Plugin.AnyConfig>(PLUGIN_ID) ?? createConfig();
  return migrateConfig(config);
};

/**
 * アプリにプラグインの設定情報を保存します
 * @param target 保存する設定情報
 * @param callback 実行完了後イベント
 */
export const storeStorage = (target: Record<string, any>, callback?: () => void): void => {
  const converted = Object.entries(target).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: JSON.stringify(value) }),
    {}
  );

  kintone.plugin.app.setConfig(converted, callback);
};

export const getUpdatedStorage = <T extends keyof Plugin.Condition>(
  storage: Plugin.Config,
  props: {
    conditionIndex: number;
    key: T;
    value: Plugin.Condition[T];
  }
) => {
  const { conditionIndex, key, value } = props;
  return produce(storage, (draft) => {
    draft.conditions[conditionIndex][key] = value;
  });
};
