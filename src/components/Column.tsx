import useDarkModeStore from '../store/DarkModeStore';

type ColumnProps = {
  id: ParentType;
  tasks: Task[];
  index: number;
};

const Column = ({ id, tasks, index }: ColumnProps) => {
  const isDark = useDarkModeStore((state) => state.isDark);

  return (
    <div className='-mt-20'>
      <div className={`pb-7 p-2 rounded-md shadow-sm ${isDark ? 'bg-[#2d3748]/40' : 'bg-[#718096]/20'}`}>
        <h2 className={` ${isDark ? 'text-white' : 'text-black'} flex mt-2 lg:ml-3 sm:ml-6 ml-4 justify-between text-[17px] font-semibold`}>
          {id}
          <p className={`${isDark ? 'text-white' : 'text-black'} lg:mr-2 mr-3 sm:mr-5 bg-slate-600/40 rounded-full w-6 h-6 lg:pt-[2px] pt-[2px] pr-[1px] text-sm text-center`}>
            {tasks.length}
          </p>
        </h2>
        <div className='space-y-2'>
          {tasks.map((task, index) => (
            <div key={task.$id} className={`p-2 ${isDark ? 'bg-[#2E3033]' : 'bg-slate-800/20'} rounded-md`}>
              {/* TO-DO */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Column;
