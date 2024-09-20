import { conditionsState, selectedConditionIdState } from '@/config/states/plugin';
import { useSnackbar } from 'notistack';
import { useRecoilCallback } from 'recoil';

export const useTab = () => {
  const onTabChange = useRecoilCallback(
    ({ set }) =>
      async (condition: Plugin.Condition) => {
        set(selectedConditionIdState, condition.id);
      },
    []
  );
  return { onTabChange };
};

export const useDeleteTab = () => {
  const { enqueueSnackbar } = useSnackbar();

  const deleteTab = useRecoilCallback(
    ({ set }) =>
      async (id: string) => {
        set(conditionsState, (prev) => prev.filter((condition) => condition.id !== id));
        enqueueSnackbar('設定を削除しました', { variant: 'success' });
      },
    []
  );
  return { deleteTab };
};
