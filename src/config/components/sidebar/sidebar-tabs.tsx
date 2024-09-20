import { RecoilDndContext } from '@/lib/components/recoil-dnd-context';
import { RecoilSortableContext } from '@/lib/components/recoil-sortable-context';
import { cn } from '@/lib/utils';
import { CSS } from '@dnd-kit/utilities';
import styled from '@emotion/styled';
import { GripVertical, Trash2 } from 'lucide-react';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import {
  conditionsLengthState,
  conditionsState,
  selectedConditionIdState,
} from '../../states/plugin';
import TabIcon from './tab-icon';
import TabLabel from './tab-label';
import { useSortable } from '@dnd-kit/sortable';
import { useDeleteTab, useTab } from './use-tab';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

const SidebarTab: FC<{ condition: Plugin.Condition; index: number }> = ({ condition, index }) => {
  const {
    isDragging,
    setActivatorNodeRef,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: condition.id });
  const { onTabChange } = useTab();
  const { deleteTab } = useDeleteTab();
  const conditionsLength = useRecoilValue(conditionsLengthState);
  const selectedId = useRecoilValue(selectedConditionIdState);

  const onClick = () => onTabChange(condition);

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div
          ref={setNodeRef}
          className={cn(
            'border-0 border-r-2 border-solid border-transparent grid grid-cols-[auto_1fr] bg-background items-center transition-colors active:bg-blue-100/70',
            {
              'z-50 shadow-md': isDragging,
              'border-blue-600 bg-blue-100/30 text-blue-600': selectedId === condition.id,
            }
          )}
          style={{
            transform: CSS.Transform.toString(transform),
            transition,
          }}
        >
          <div
            className='grid place-items-center p-4 outline-none'
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            ref={setActivatorNodeRef}
            {...attributes}
            {...listeners}
            tabIndex={-1}
          >
            <GripVertical className='w-5 h-5 text-gray-400' />
          </div>
          <button
            role='button'
            tabIndex={0}
            onClick={onClick}
            className='py-3 px-4 pl-0 bg-transparent border-0 cursor-pointer outline-none text-left text-gray-600 text-sm grid grid-cols-[auto_1fr] items-center'
          >
            <TabIcon index={index} />
            <TabLabel index={index} />
          </button>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem onClick={() => deleteTab(condition.id)} disabled={conditionsLength < 2}>
          <Trash2 strokeWidth={1.5} className='mr-2 w-5 h-5 text-gray-600' />
          この設定を削除
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const Component: FC<{ className?: string }> = ({ className }) => {
  const conditions = useRecoilValue(conditionsState);

  return (
    <div className={cn(className, 'h-full')}>
      <RecoilSortableContext state={conditionsState}>
        {conditions.map((condition, index) => (
          <SidebarTab key={condition.id} condition={condition} index={index} />
        ))}
      </RecoilSortableContext>
    </div>
  );
};

const StyledComponent = styled(Component)`
  overflow: hidden;
  &:hover {
    overflow: auto;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0004;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Container: FC = () => {
  return (
    <RecoilDndContext state={conditionsState}>
      <StyledComponent />
    </RecoilDndContext>
  );
};

export default Container;
