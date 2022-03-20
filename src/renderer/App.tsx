import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { NoteBox } from 'components/NoteBox';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="100px" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate - fork</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
        </a>
      </div>
      <NoteBox />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        {/* <Route path="/../components/*" element={<NoteBox />} /> */}
      </Routes>
    </Router>
  );
}
