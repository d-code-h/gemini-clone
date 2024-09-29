import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import ContextProvider from './context/Context';

function App() {
  return (
    <ContextProvider>
      <Sidebar />
      <Main />
    </ContextProvider>
  );
}

export default App;
