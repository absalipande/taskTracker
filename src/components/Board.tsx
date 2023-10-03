import useDarkModeStore from '../store/DarkModeStore';
import Column from './Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const Board = () => {
  const isDark = useDarkModeStore((state) => state.isDark);

  return (
    <div className={isDark ? 'bg-[#1A2020C]' : 'bg-[#EDF2F7]'}>
      <div>
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId='board' direction='horizontal' type='column'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 max-w-[1400px] mx-auto'>
                <Column id={'To-do'} tasks={[]} index={0} />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Board;
