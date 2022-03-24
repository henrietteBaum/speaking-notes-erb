import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(4, 4, 51);
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    color: whitesmoke;

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgb(34, 40, 87);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: dodgerblue;
    }

    ::-webkit-scrollbar-corner {
      background: rgb(34, 40, 87);
    }

  }
`;

export default GlobalStyle;
