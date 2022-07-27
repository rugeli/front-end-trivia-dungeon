import { Link } from "react-router-dom";
import './App.css';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import Authentication from './pages/Authentication';
import Home from './pages/Home';

function App() {
  return (
      <div className="App">
        <h1>Welcome to React Router!</h1>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes> */}
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Authentication">Sign up/Log in</Link> |{" "}
        <Link to="/Quiz">Play</Link>
        </nav>
      </div>
    );
  }

export default App;
