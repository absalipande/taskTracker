import logoBlack from '../assets/logoBlack.png';
import logoWhite from '../assets/logoWhite.png';
import useDarkModeStore from '../store/DarkModeStore';
import DarkMode from './DarkMode';

const Header = () => {
  const isDark = useDarkModeStore((state) => state.isDark);

  return (
    <header
      className={`flex flex-col items-center pt-5 sm:pt-2px lg:pt-5 xl:pt-5 ${
        isDark ? 'bg-[#1a202c]' : 'bg-[#edf2f7]'
      }`}
    >
      <div className='flex flex-col items-center justify-center max-w-[1400px] w-full px-5 sm:px-5'>
        <div className='flex items-center'>
          <img
            src={!isDark ? logoBlack : logoWhite}
            alt='logo'
            className='h-56 lg:h-64 lg:w-64 mx-auto sm:mx-0'
          />
          <div className='-mt-5 -ml-10'>
            <DarkMode />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
