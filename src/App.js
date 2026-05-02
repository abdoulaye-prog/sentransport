import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p>Bienvenue ! Cette application vous aide à trouver votre ligne de bus à Dakar.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;