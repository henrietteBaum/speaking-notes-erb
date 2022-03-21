// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
// import './App.css';


import GlobalStyle from 'styles/GlobalStyle';
import Container from 'styles/Container.style';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import NoteBox from 'components/NoteBox';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Sidebar />
        <NoteBox />
      </Container>
    </>
  );
}
