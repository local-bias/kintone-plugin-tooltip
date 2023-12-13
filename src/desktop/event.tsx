import React from 'react';
import { createRoot } from 'react-dom/client';
import { getMetaFields_UNSTABLE } from '@lb-ribbit/kintone-secrets';
import { restorePluginConfig } from '@/lib/plugin';
import { css } from '@emotion/css';
import { Tooltip } from '@mui/material';
import { PLUGIN_NAME } from '@/lib/static';
import { manager } from '@/lib/event-manager';
import Icon from './components/icon';
import Emoji from './components/emoji';

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

    if (!metaFields) {
      event.error = `kintoneのアップデートにより、${PLUGIN_NAME}は動作しなくなりました。詳細はホームページをご確認ください`;
      return event;
    }

    for (const condition of config.conditions) {
      const { fieldCode, type } = condition;
      const metaField = metaFields.find((field) => field.var === fieldCode);
      if (!metaField) {
        console.error(
          `[${PLUGIN_NAME}] 設定したフィールドが見つからなかったため、処理を中断しました`
        );
        continue;
      }

      const target =
        document.querySelector(`.label-${metaField.id} > div`) ||
        document.querySelector(`.label-${metaField.id}`);
      if (!target) {
        console.error(
          `[${PLUGIN_NAME}] 設定したフィールドが見つからなかったため、処理を中断しました`
        );
        continue;
      }

      target.classList.add(css`
        position: relative;
      `);

      const root = document.createElement('span');
      target.append(root);
      createRoot(root).render(
        <Tooltip
          title={
            <>
              {condition.label.split(/\n/).map((line, i) => (
                <div key={i}>{line || '　'}</div>
              ))}
            </>
          }
          placement='top'
        >
          <span className='absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center'>
            <Icon condition={condition} />
            <Emoji condition={condition} />
          </span>
        </Tooltip>
      );
    }

    return event;
  }
);
