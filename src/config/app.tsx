import { PluginErrorBoundary } from '@/lib/components/error-boundary';
import { URL_BANNER, URL_PROMOTION } from '@/lib/static';
import {
  Notification,
  PluginBanner,
  PluginConfigProvider,
  PluginContent,
  PluginLayout,
} from '@konomi-app/kintone-utilities-react';
import { LoaderWithLabel } from '@konomi-app/ui-react';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import React, { FC, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import config from '../../plugin.config.mjs';
import Footer from './components/footer';
import Form from './components/form';
import Sidebar from './components/sidebar';
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
                <PluginLayout>
                  <Sidebar />
                  <PluginContent>
                    <PluginErrorBoundary>
                      <Form />
                    </PluginErrorBoundary>
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
