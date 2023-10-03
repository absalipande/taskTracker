import { FormEvent } from 'react';
import useDarkModeStore from '../store/DarkModeStore';
import { useModalStore } from '../store/ModalStore';
import { useBoardStore } from '../store/BoardStore';

const AddModal = () => {
  const isDark = useDarkModeStore((state) => state.isDark);
  const [isAddModalOpen, addModalClose, modalCategoryTitle] = useModalStore((state) => [
    state.isAddModelOpen,
    state.addModalClose,
    state.modalCategoryTitle,
    state.setModalCategoryTitle,
  ]);
  const [addTask, addTaskInput, setAddTaskInput] = useBoardStore((state) => [state.addTask, state.addTaskInput, state.setAddTaskInput]);

  let title = '';
  if (modalCategoryTitle === 'To-do') {
    title = 'Add a new to-do';
  } else if (modalCategoryTitle === 'In-progress') {
    title = 'Add In-progress';
  } else if (modalCategoryTitle === 'Done') {
    title = 'Add Done';
  }

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addTaskInput) return;
    addTask(addTaskInput, modalCategoryTitle);
    setAddTaskInput('');
    addModalClose();
  };

  return <div></div>;
};

export default AddModal;
