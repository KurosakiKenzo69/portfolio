import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Competences from "./pages/Competences";
import Title from "./components/Title";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <body>
        {/* <Competences></Competences> */}
        <Home></Home>
        </body>
    </div>

  );
}

export default App;
