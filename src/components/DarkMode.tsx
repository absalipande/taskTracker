import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkModeStore from '../store/DarkModeStore';

const DarkMode = () => {
  const [isDark, setDark] = useDarkModeStore((state) => [
    state.isDark,
    state.setDark,
  ]);

  const toggleDarkMode = (checked: boolean) => {
    setDark(checked);
  };

  return (
    <div>
      <DarkModeSwitch
        size={40}
        className='flex h-7'
        checked={isDark}
        onChange={toggleDarkMode}
      />
    </div>
  );
};

export default DarkMode;
