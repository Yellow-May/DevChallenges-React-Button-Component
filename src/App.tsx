import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalCss from "./styles/global";
import theme from './styles/themes';
import Typography from "./styles/Typography"
import Button from "./components/Button";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Typography>Buttons</Typography>


    </ThemeProvider>
  )
}

export default App
