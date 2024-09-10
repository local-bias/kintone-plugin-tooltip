import { manager } from '@/lib/event-manager';
import { restorePluginConfig } from '@/lib/plugin';
import { PLUGIN_NAME } from '@/lib/static';
import { css } from '@emotion/css';
import { getMetaFields_UNSTABLE } from '@konomi-app/kintone-utilities';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Emoji from './components/emoji';
import Icon from './components/icon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { sanitize } from 'dompurify';

let rendered = false;

manager.add(
  [
    'app.record.create.show',
    'app.record.edit.show',
    'app.record.detail.show',
    'app.record.index.show',
  ],
  (event) => {
    if (rendered && event.type.includes('index')) {
      return event;
    }

    const config = restorePluginConfig();
    rendered = true;

    const metaFields = getMetaFields_UNSTABLE();

    process.env.NODE_ENV === 'development' && console.log({ metaFields });

    if (!metaFields) {
      event.error = `kintoneのアップデートにより、${PLUGIN_NAME}は動作しなくなりました。詳細はホームページをご確認ください`;
      return event;
    }

    for (const condition of config.conditions) {
      const { fieldCode, targetEvents } = condition;
      if (targetEvents.every((targetEvent) => !event.type.includes(targetEvent))) {
        continue;
      }

      const metaField = metaFields.find((field) => field && field.var === fieldCode);
      if (!metaField) {
        process.env.NODE_ENV === 'development' &&
          console.error(
            `[${PLUGIN_NAME}] 設定したフィールドが見つからなかったため、処理を中断しました`
          );
        continue;
      }

      const commonSelector = `.label-${metaField.id}:not(.subtable-label-gaia)`;
      /** レコード一覧画面のラベルの最小セレクター */
      const indexLabelSelector = `${commonSelector} .recordlist-header-label-gaia`;
      /** レコード詳細画面のラベルの最小セレクター */
      const detailLabelSelector = `${commonSelector} .control-label-text-gaia`;
      /** モバイル版のレコード一覧画面のラベルの最小セレクター */
      const mobileIndexLabelSelector = `${commonSelector} .gaia-mobile-v2-app-index-recordlist-table-headercell-label`;
      const target =
        document.querySelector(indexLabelSelector) ||
        document.querySelector(detailLabelSelector) ||
        document.querySelector(mobileIndexLabelSelector) ||
        document.querySelector(`${commonSelector} > div`) ||
        document.querySelector(`${commonSelector}`);
      if (!target) {
        process.env.NODE_ENV === 'development' &&
          console.error(
            `[${PLUGIN_NAME}] 設定したフィールドが見つからなかったため、処理を中断しました`
          );
        continue;
      }

      target.classList.add(css`
        padding-right: 36px !important;
        position: relative !important;
      `);

      const root = document.createElement('span');
      target.append(root);
      createRoot(root).render(
        <TooltipProvider>
          <span className='🐸'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger className='absolute right-2 p-0 top-1/2 -translate-y-1/2 grid place-items-center'>
                <Icon condition={condition} />
                <Emoji condition={condition} />
              </TooltipTrigger>
              <TooltipContent
                style={{
                  backgroundColor: condition.backgroundColor,
                  color: condition.foregroundColor,
                }}
              >
                <div dangerouslySetInnerHTML={{ __html: sanitize(condition.label) }} />
              </TooltipContent>
            </Tooltip>
          </span>
        </TooltipProvider>
      );
    }

    return event;
  }
);
