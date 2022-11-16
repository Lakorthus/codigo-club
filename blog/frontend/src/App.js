import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Cards/Cards';

export default function App() {
  return (
    <>
      <Main>
      <NavBar />
      <Cards />
      </Main>
    </>
  );
}


