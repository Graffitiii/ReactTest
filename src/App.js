import logo from './img/logoP.png';
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import './App.css';

function App() {
  return (
    <nav className="App-header">
      <ul>
        <li><a><FiMenu  className="logoHam"/></a></li>
        <li><img className="logoHead" src={logo} alt="Phatra" /></li>
      </ul>
      <ul>
        <li><a><FiSearch  className="logoSearch"/></a></li>
        <li>TH</li>
        <li><a><FiChevronDown  className="logoDrop"/></a></li>
      </ul>
    </nav>
    
  );
  
}

export default App;
