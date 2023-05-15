import './App.scss';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer name="Ajay" year={2023} />
      <Footer name="Theo" year={2024} />
      <Footer name="Estefania" year={2025} />
    </>
  );
}

export default App;