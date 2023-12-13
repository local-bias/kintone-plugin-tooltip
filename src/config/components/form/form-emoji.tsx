import {
  conditionEmojiState,
  conditionIconTypeState,
  conditionTypeState,
} from '@/config/states/plugin';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
} from '@konomi-app/kintone-utilities-react';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import EmojiPicker from 'emoji-picker-react';
import { TextField } from '@mui/material';

const Component: FC = () => {
  const emoji = useRecoilValue(conditionEmojiState);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(conditionEmojiState, value);
      },
    []
  );

  return (
    <div className='flex gap-8'>
      <div>
        <div className='text-sm'>プレビュー</div>
        <div className='grid place-items-center text-2xl p-4 border border-solid border-gray-300 rounded'>
          {emoji}
        </div>
      </div>
      <EmojiPicker onEmojiClick={(emoji) => onChange(emoji.emoji)} />
    </div>
  );
};

const Container = () => {
  const type = useRecoilValue(conditionTypeState);
  if (type !== 'emoji') {
    return null;
  }
  return (
    <PluginFormSection>
      <PluginFormTitle>表示する絵文字</PluginFormTitle>
      <PluginFormDescription>表示する絵文字を選択してください。</PluginFormDescription>
      <PluginFormDescription last>
        表示される絵文字は、利用しているブラウザによって異なる場合や、絵文字がサポートされていない場合があります。
      </PluginFormDescription>
      <Component />
    </PluginFormSection>
  );
};

export default Container;
