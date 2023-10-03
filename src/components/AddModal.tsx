import useDarkModeStore from '../store/DarkModeStore';
import { useModalStore } from '../store/ModalStore';
import { useBoardStore } from '../store/BoardStore';
import { FormEvent, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button } from './ui/button';

import AOS from 'aos'
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Transition show={isAddModalOpen} as={Fragment}>
    <Dialog  as='form' onSubmit={handleAddTask} onClose={addModalClose} className='flex absolute top-60 m-auto left-0 right-0 '>
      <div data-aos='fade-in' className="fixed inset-0 bg-black/30 bg-opacity-25" />
        <Dialog.Panel  className={`${isDark ? 'bg-[#1F2022]' : 'bg-slate-300'} transition-all mx-auto max-w-lg transform overflow-hidden p-6 rounded-2xl shadow-xl align-middle w-[90%]`}>
          <Dialog.Title className={`${isDark ? 'text-white' : 'text-black'} text-center lg:mb-5 mb-3 text-[18px]`}>{title}</Dialog.Title>
          <div>
              <input className='rounded-lg lg:px-4 lg:py-2 w-full lg:mb-5 mb-5 px-3 py-2' type='text' value={addTaskInput} onChange={(e) => setAddTaskInput(e.target.value)} placeholder='What is your task?'/>
          </div>
          <div className='flex gap-5 float-right'>
              <Button onClick={addModalClose} className='bg-slate-700/40 hover:bg-slate-400  px-4'>
                  <p>Cancel</p>
              </Button>
              <Button className={`bg-slate-700/40 px-4 ${!addTaskInput ? 'text-slate-500 cursor-not-allowed' : 'text-white hover:bg-slate-400 '} `} type='submit' disabled={!addTaskInput}>
                  <p>Add</p>
              </Button>
          </div>
        </Dialog.Panel>
    </Dialog>
  </Transition>
  )
};

export default AddModal;
