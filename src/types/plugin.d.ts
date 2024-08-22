declare namespace Plugin {
  /** 🔌 プラグインがアプリ単位で保存する設定情報 */
  type Config = ConfigV4;

  /** 🔌 プラグインの詳細設定 */
  type Condition = Config['conditions'][number];

  type ConditionType = Condition['type'];
  type IconType = Condition['iconType'];

  /** 🔌 過去全てのバージョンを含むプラグインの設定情報 */
  type AnyConfig = ConfigV1 | ConfigV2 | ConfigV3 | ConfigV4;

  type ConfigV4 = {
    version: 4;
    conditions: (ConfigV3['conditions'][number] & {
      /**
       * ツールチップを表示する画面
       * - create: レコード追加画面
       * - edit: レコード編集画面
       * - detail: レコード詳細画面
       * - index: 一覧画面
       */
      targetEvents: ('create' | 'edit' | 'index' | 'detail')[];
      /**
       * ツールチップのデザイン: 背景色
       *
       * ツールチップの`backgroundColor`プロパティに使用されます
       */
      backgroundColor: string;
      /**
       * ツールチップのデザイン: テキストの色
       *
       * ツールチップの`color`プロパティに使用されます
       */
      foregroundColor: string;
    })[];
  };

  type ConfigV3 = {
    version: 3;
    conditions: (ConfigV2['conditions'][number] & {
      /**
       * 設定情報のID
       */
      id: string;
    })[];
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

  type ConfigV1 = {
    version: 1;
    conditions: {
      field: string;
      label: string;
    }[];
  };
}
