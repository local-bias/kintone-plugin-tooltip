import { conditionIconColorState, conditionTypeState } from '@/config/states/plugin';
import { RecoilColorPicker } from '@/lib/components/recoil-color-picker';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
} from '@konomi-app/kintone-utilities-react';
import React from 'react';
import { useRecoilValue } from 'recoil';

const Container = () => {
  const type = useRecoilValue(conditionTypeState);
  if (type !== 'icon') {
    return null;
  }
  return (
    <PluginFormSection>
      <PluginFormTitle>アイコンの色</PluginFormTitle>
      <PluginFormDescription last>
        アイコンの色を指定してください。色は16進数のカラーコードで指定することもできます。
      </PluginFormDescription>
      <RecoilColorPicker
        state={conditionIconColorState}
        label='アイコンの色'
        variant='outlined'
        color='primary'
      />
    </PluginFormSection>
  );
};

export default Container;
