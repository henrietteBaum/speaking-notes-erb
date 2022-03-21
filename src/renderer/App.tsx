// import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
// import './App.css';


import GlobalStyle from 'styles/GlobalStyle';
import Container from 'styles/Container.style';
import NoteBox from 'components/NoteBox';
import Header from 'components/Header';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <NoteBox />
      </Container>
    </>
  );
}
