import React, { Suspense, FC } from 'react';
import { RecoilRoot } from 'recoil';
import { SnackbarProvider } from 'notistack';
import { URL_BANNER, URL_PROMOTION } from '@/lib/static';
import { LoaderWithLabel } from '@konomi-app/ui-react';
import {
  Notification,
  PluginBanner,
  PluginConfigProvider,
  PluginContent,
  PluginLayout,
} from '@konomi-app/kintone-utilities-react';
import { PluginErrorBoundary } from '@/lib/components/error-boundary';
import Form from './components/form';
import Footer from './components/footer';
import config from '../../plugin.config.mjs';
import { ThemeProvider } from '@mui/material';
import { myTheme } from './components/theme';

const Component: FC = () => (
  <Suspense fallback={<LoaderWithLabel label='画面の描画を待機しています' />}>
    <RecoilRoot>
      <ThemeProvider theme={myTheme}>
        <PluginErrorBoundary>
          <PluginConfigProvider config={config}>
            <Notification />
            <SnackbarProvider maxSnack={1}>
              <Suspense fallback={<LoaderWithLabel label='設定情報を取得しています' />}>
                <PluginLayout singleCondition>
                  <PluginContent>
                    <Form />
                  </PluginContent>
                  <PluginBanner url={URL_BANNER} />
                  <Footer />
                </PluginLayout>
              </Suspense>
            </SnackbarProvider>
          </PluginConfigProvider>
        </PluginErrorBoundary>
      </ThemeProvider>
    </RecoilRoot>
    <iframe title='promotion' loading='lazy' src={URL_PROMOTION} className='border-0 w-full h-16' />
  </Suspense>
);

export default Component;
