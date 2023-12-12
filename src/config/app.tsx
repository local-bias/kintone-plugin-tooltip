import React, { Suspense, FC } from 'react';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';

import { restoreStorage } from '../lib/plugin';
import { PluginErrorBoundary } from '@/lib/components/error-boundary';

import Form from './components/form';
import Footer from './components/footer';

import { pluginIdState, storageState } from './states/plugin';
import { URL_PROMOTION } from '@/lib/static';
import { LoaderWithLabel } from '@konomi-app/ui-react';

const Component: FC<{ pluginId: string }> = ({ pluginId }) => (
  <Suspense fallback={<p>読み込み中...</p>}>
    <RecoilRoot
      initializeState={({ set }) => {
        set(pluginIdState, pluginId);
        set(storageState, restoreStorage(pluginId));
      }}
    >
      <PluginErrorBoundary>
        <SnackbarProvider maxSnack={1}>
          <Suspense fallback={<LoaderWithLabel label='設定情報を取得しています' />}>
            <Form />
            <Footer />
          </Suspense>
        </SnackbarProvider>
      </PluginErrorBoundary>
    </RecoilRoot>
    <iframe
      title='promotion'
      loading='lazy'
      src={URL_PROMOTION}
      style={{ border: '0', width: '100%', height: '64px' }}
    />
  </Suspense>
);

export default Component;
