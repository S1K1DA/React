// import PrintWorld from "./components/01_PrintWorld";
import { Link } from "react-router-dom";
import './styles/App.css';

function App() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/" className="no-underline">Home</Link>
          </li>
          <li>
            <Link to="/RouterPage" className="no-underline">02_RouterPage</Link>
          </li>
          <li>
            <Link to="/QueryString?name=정은식&age=22" className="no-underline">03_QueryString</Link>
          </li>
          <li>
            <Link to="/PathVariable/정은식" className="no-underline">04_PathVariable</Link>
          </li>
        <li>
          <Link to="/JSX" className="no-underline">05_JSX</Link>
        </li>
        </ul>

      <hr/>
        <h1>Ex1_실습 문제</h1>
        <ul>
        <li>
          <Link to="/Training/AboutPage" className="no-underline">EX1_AboutPage</Link>
        </li>
        <li>
          <Link to="/Training/AddrPage?&addr=안양" className="no-underline">EX1_AddrPage</Link>
        </li>
        <li>
          <Link to="/Training/NamePage/정은식" className="no-underline">EX1_NamePage</Link>
        </li>
      </ul>

      <hr/>
        <h1>Ex1_실습 문제</h1>
        <ul>
          <li>
            <Link to="/InlinePage" className="no-underline">Ex2_InlinePage</Link>
          </li>
          <li>
            <Link to="/OutStyleSheetPage" className="no-underline">Ex2_OutStyleSheetPage</Link>
          </li>
        </ul>

      </div>
    );
}

export default App;
