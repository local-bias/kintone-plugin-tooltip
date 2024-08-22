import React, { FC } from 'react';
import { conditionLabelState, getConditionPropertyState } from '../../states/plugin';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
  RecoilText,
} from '@konomi-app/kintone-utilities-react';
import FieldCodeForm from './form-fieldcode';
import DeleteButton from './condition-delete-button';
import TypeForm from './form-type';
import IconTypeForm from './form-icon-type';
import IconColorForm from './form-icon-color';
import EmojiForm from './form-emoji';
import { RecoilColorPicker } from '@/lib/components/recoil-color-picker';
import Preview from './preview';

const Component: FC = () => {
  return (
    <div className='p-4'>
      <PluginFormSection>
        <PluginFormTitle>フィールドコード</PluginFormTitle>
        <PluginFormDescription last>
          ラベルを表示するフィールドのフィールドコードを選択してください。
        </PluginFormDescription>
        <FieldCodeForm />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>表示するヒント</PluginFormTitle>
        <PluginFormDescription>
          フィールドに表示されたアイコンにカーソルを合わせると表示されるヒントの内容を入力してください。
        </PluginFormDescription>
        <PluginFormDescription last>
          HTMLによる記述が可能です。例えば、リンクや画像を埋め込むことができます。
        </PluginFormDescription>
        <RecoilText
          state={conditionLabelState}
          label='表示するヒント'
          multiline
          rows={4}
          fullWidth
        />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>アイコンタイプ</PluginFormTitle>
        <PluginFormDescription>
          フィールドに表示されるアイコンのタイプを選択してください。
        </PluginFormDescription>
        <PluginFormDescription last>
          プラグイン既定のアイコン、もしくは任意の絵文字を選択することができます。
        </PluginFormDescription>
        <TypeForm />
      </PluginFormSection>
      <IconTypeForm />
      <IconColorForm />
      <EmojiForm />
      <PluginFormSection>
        <PluginFormTitle>ツールチップのデザイン: 背景色</PluginFormTitle>
        <PluginFormDescription last>
          アイコンをフォーカスした際に表示されるツールチップの背景色を設定してください。
        </PluginFormDescription>
        <RecoilColorPicker
          state={getConditionPropertyState('backgroundColor')}
          variant='outlined'
          color='primary'
          label='背景色'
        />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>ツールチップのデザイン: テキストの色</PluginFormTitle>
        <PluginFormDescription last>
          アイコンをフォーカスした際に表示されるツールチップのテキストの色を設定してください。
        </PluginFormDescription>
        <RecoilColorPicker
          state={getConditionPropertyState('foregroundColor')}
          variant='outlined'
          color='primary'
          label='テキストの色'
        />
      </PluginFormSection>
      <PluginFormSection>
        <PluginFormTitle>プレビュー</PluginFormTitle>
        <PluginFormDescription>以下に設定した内容をプレビューします。</PluginFormDescription>
        <PluginFormDescription last>
          環境の違いにより、画面によっては全く同じ表示にならない可能性がある点に注意してください。
        </PluginFormDescription>
        <Preview />
      </PluginFormSection>
      <DeleteButton />
    </div>
  );
};

export default Component;
