import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalCss from "./styles/global";
import theme from './styles/themes';
import Typography from "./styles/Typography"
import Row from "./styles/Row";
import Button from "./components/Button";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Typography>Buttons</Typography>

      <Row>
        <Button text='Default' />
        <Button text='Color Primary' color='primary' />
        <Button text='Color Secondary' color='secondary' />
        <Button text='Color Danger' color='danger' />
      </Row>

      <Row>
        <Button text='Outlined Default' variant='outlined' />
        <Button text='Outlined Primary' color='primary' variant='outlined' />
        <Button text='Outlined Secondary' color='secondary' variant='outlined' />
        <Button text='Outlined Danger' color='danger' variant='outlined' />
      </Row>

      <Row>
        <Button text='Text Default' variant='text' />
        <Button text='Text Primary' color='primary' variant='text' />
        <Button text='Text Secondary' color='secondary' variant='text' />
        <Button text='Text Danger' color='danger' variant='text' />
      </Row>

      <Row>
        <Button text='Disabled Default' disabled />
        <Button text='Color Primary' color='primary' disabled />
        <Button text='Color Secondary' color='secondary' disabled />
        <Button text='Color Danger' color='danger' disabled />
        <Button text='Outlined Primary' color='primary' variant='outlined' disabled />
        <Button text='Outlined Secondary' color='secondary' variant='outlined' disabled />
        <Button text='Outlined Danger' color='danger' variant='outlined' disabled />
        <Button text='Text Primary' color='primary' variant='text' disabled />
        <Button text='Text Secondary' color='secondary' variant='text' disabled />
        <Button text='Text Danger' color='danger' variant='text' disabled />
      </Row>

      <Row>
        <Button startIcon='arrowLeft' text='Back' color='primary' />
        <Button endIcon='arrowRight' text='Go' variant='outlined' />
        <Button startIcon='user' color='secondary' variant='text' shadow />
      </Row>

    </ThemeProvider>
  )
}

export default App
