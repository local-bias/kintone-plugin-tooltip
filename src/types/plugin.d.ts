declare namespace Plugin {
  /** 🔌 プラグインがアプリ単位で保存する設定情報 */
  type Config = ConfigV2;

  /** 🔌 プラグインの詳細設定 */
  type Condition = Config['conditions'][number];

  type ConditionType = Condition['type'];
  type IconType = Condition['iconType'];

  /** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
  type AnyConfig = ConfigV1 | ConfigV2;

  type ConfigV1 = {
    version: 1;
    conditions: {
      field: string;
      label: string;
    }[];
  };

  type ConfigV2 = {
    version: 2;
    conditions: {
      fieldCode: string;
      label: string;
      type: 'icon' | 'emoji';
      emoji: string;
      iconType: 'info' | 'warning' | 'error' | 'success';
      iconColor: string;
    }[];
  };
}
