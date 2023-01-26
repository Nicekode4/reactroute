import { Link } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
      <Header />
      <NavBar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
