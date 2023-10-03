// import Board from './components/Board';
import Header from './components/Header';
import useDarkModeStore from './store/DarkModeStore';

const App = () => {
  const isDark = useDarkModeStore((state) => state.isDark);

  return (
    <div className={isDark ? 'bg-[#1a202c] h-screen' : 'bg-[#edf2f7] h-screen'}>
      <Header />
      {/* <Board /> */}
    </div>
  );
};

export default App;
