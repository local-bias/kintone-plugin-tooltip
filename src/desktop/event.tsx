import React from 'react';
import { createRoot } from 'react-dom/client';
import { getFields } from '@common/cybozu';
import { restoreStorage } from '@common/plugin';
import { css } from '@emotion/css';
import { Tooltip } from '@mui/material';
import { HelpIcon } from '@common/components/help-icon';
import { PLUGIN_NAME } from '@common/static';

const events: launcher.Events = [
  'app.record.create.show',
  'app.record.edit.show',
  'app.record.detail.show',
];

const action: launcher.Action = async (event, pluginId) => {
  const config = restoreStorage(pluginId);

  const metaFields = getFields();

  for (const condition of config.conditions) {
    condition.field;

    const metaField = metaFields.find((field) => field.var === condition.field);
    if (!metaField) {
      console.error(
        `[${PLUGIN_NAME}] 設定したフィールドが見つからなかったため、処理を中断しました`
      );
      continue;
    }

    const target = document.querySelector(`.label-${metaField.id}`);
    if (!target) {
      console.error(
        `[${PLUGIN_NAME}] 設定したフィールドが見つからなかったため、処理を中断しました`
      );
      continue;
    }

    target.classList.add(css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      * {
        padding: 0;
        margin: 0;
        line-height: 1;
      }
    `);

    const root = document.createElement('span');
    target.append(root);
    createRoot(root).render(
      <Tooltip title={condition.label} placement='top'>
        <span>
          <HelpIcon fill='#999c' style={{ width: '1.1rem', height: '1.1rem' }} />
        </span>
      </Tooltip>
    );
  }

  return event;
};

export default { events, action };
