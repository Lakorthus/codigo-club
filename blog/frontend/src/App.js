import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
export default function App() {
  return (
    <>
      <Main>
      <NavBar />
      <Body />
      </Main>
    </>
  );
}


