type ParentType = 'To-do' | 'In-progress' | 'Done';

type Column = {
  id: ParentType;
  tasks: Task[];
};

type Task = {
  $id: string;
  title: string;
  status: ParentType;
};

type Board = {
  columns: Column[];
};
