import './App.css';
import MainContextProvider from './contexts/MainContext';
import Routes from './Routes';


function App() {
  return (
    <>
      <MainContextProvider>
        <Routes />
      </MainContextProvider>
    </>
  );
}

export default App;
