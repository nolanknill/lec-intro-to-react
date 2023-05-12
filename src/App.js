import './App.scss';

function App() {
  return (
    <>
      <Header />
      <AjaysFooter />
    </>
  );
}

function Header() {
  return (
    <header className="app">
      <h1 className="app__title">Hello World</h1>
    </header>
  )
}

function AjaysFooter() {
  const year = 2023;
  
  return (
    <footer>
      <p>Copyright Ajay's Amazing Idea {year}</p>
    </footer>
  )
}

export default App;
