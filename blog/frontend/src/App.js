import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  return (
    <>
      <Main>
       <div className="container">
       <NavBar />
        <SearchBar />
       </div>
      
        <Body />
      </Main>
    </>
  );
}
