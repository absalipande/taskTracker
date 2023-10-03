import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { title } from 'process';

interface BoardStore {
  board: {
    columns: Column[];
  };
  getBoard: () => void;
  setBoardState: (board: { columns: Column[] }) => void;
  addTaskInput: string;
  setAddTaskInput: (input: string) => void;
  addTask: (task: string, columnId: ParentType) => void;
}

export const useBoardStore = create<BoardStore>()(
  persist(
    (set) => ({
      board: {
        columns: [
          { id: 'To-do', tasks: [] },
          { id: 'In-progress', tasks: [] },
          { id: 'Done', tasks: [] },
        ],
      },
      getBoard: () => {},
      setBoardState: (board) => set({ board }),

      // add task state
      addTaskInput: '',
      setAddTaskInput: (input: string) => set({ addTaskInput: input }),
      addTask: (task: string, columnId: ParentType) => {
        set((state) => {
          const newColumns = [...state.board.columns];

          const newTask: Task = {
            $id: uuidv4(),
            title: task,
            status: columnId,
          };

          const columnIndex = newColumns.findIndex((column) => column.id === columnId);
        });
      },
    }),
    {
      name: 'board-storage',
    }
  )
);
