import React from 'react';
import useDarkModeStore from '../store/DarkModeStore';
import TaskCard from './TaskCard';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Button } from '@material-tailwind/react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useModalStore } from '../store/ModalStore';

type ColumnProps = {
  id: ParentType;
  tasks: Task[];
  index: number;
};

const Column = ({ id, tasks, index }: ColumnProps) => {
  const isDark = useDarkModeStore((state) => state.isDark);
  const [setModalCategoryTitle, addModalOpen] = useModalStore((state) => [state.setModalCategoryTitle, state.addModalOpen]);

  const handleAddTask = () => {
    addModalOpen();
    setModalCategoryTitle(id);
  };

  return (
    <Draggable draggableId={id} index={index} isDragDisabled={true}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='-mt-20'>
          <div className={`pb-7 p-2 rounded-md shadow-sm ${isDark ? 'bg-[#2d3748]/40' : 'bg-[#718096]/20'}`}>
            <h2 className={` ${isDark ? 'text-white' : 'text-black'} flex mt-2 lg:ml-3 sm:ml-6 ml-4 justify-between text-[17px] font-semibold`}>
              {id}
              <p className={`${isDark ? 'text-white' : 'text-black'} lg:mr-2 mr-3 sm:mr-5 bg-slate-600/40 rounded-full w-6 h-6 lg:pt-[2px] pt-[2px] pr-[1px] text-sm text-center`}>
                {tasks.length}
              </p>
            </h2>
            <Droppable droppableId={id} type='task'>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className='space-y-2'>
                  {tasks.map((task, index) => (
                    <TaskCard />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className='flex justify-center'>
              <Button onClick={handleAddTask} className={`${isDark ? 'bg-[#1F2022]' : 'bg-slate-400/30'} w-[95%] lg:ml-0 mt-5 lg:mt-5 py-3 hover:bg-slate-500/50`}>
                <div className={` ${isDark ? 'text-white' : 'text-black'} flex items-center justify-center gap-1`}>
                  <AiFillPlusCircle size={20} />
                  <p className='text-[15px]'>Add</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
