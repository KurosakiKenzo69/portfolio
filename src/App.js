import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar";
import Competences from "./pages/Competences";
import Title from "./components/Title";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <body>
        <Competences></Competences>
        </body>
    </div>

  );
}

export default App;
