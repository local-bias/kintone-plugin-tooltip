import React, { FC } from 'react';
import { conditionLabelState } from '../../states/plugin';
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
        <PluginFormDescription last>
          フィールドに表示されたアイコンにカーソルを合わせると表示されるヒントの内容を入力してください。
        </PluginFormDescription>
        <RecoilText state={conditionLabelState} label='表示するヒント' multiline className='w-80' />
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
      <DeleteButton />
    </div>
  );
};

export default Component;
