import React, { useState, useEffect } from 'react';
import { createNotification } from './createNotification';
import { Container, Message, Info, LangTitle } from './app_styles';
import { Button } from 'react-bootstrap';
import '../index.css';

function App() {
  const [visited, setVisited]= useState(sessionStorage.getItem('visited'));

  useEffect(() => {
    if (!visited) {
      createNotification('success', 'Hello!', 'We are glad that you are here!');
      sessionStorage.setItem('visited', true);
    }
  }, [])

  return (
    <div className="App">
      <Button variant='outline-light' style={{'position': 'absolute', 'top': '3px', 'left': '3px'}}>About us</Button>
      <Button variant='outline-light' style={{'position': 'absolute', 'top': '3px', 'right': '3px'}}>Source code</Button>
      <Container padding={'large'}>
        <Message>
          <h2 style={{'marginBottom': '50px'}}>
            Welcome to CodeOn
          </h2>
          <h4>
            Why downloading a code editor,<br/>
            when we you can find it online?
          </h4>
        </Message>
        <Info>
          With us, you code:
          <ul>
            <li><b>from anywhere</b></li>
            <li>in multiple languages</li>
            <li>with a rapid and easy-to-use environment</li>
          </ul>
        <Button variant='primary'>Get started</Button>
        </Info>
      </Container>
      <LangTitle>
        Supported Languages
      </LangTitle>
      <Container padding={'small'} showing={'slow'}>
        {
          ['Java', 'Python', 'C', 'C++', 'C+', 'Ruby', 'Kotlin', 'Swift'].map((value, index) => {
            return (
              <Button style={{'margin': 'auto'}} variant='outline-success' key={index}>{value}</Button>
            )
          })
        }
      </Container>

    </div>
  );
}

export default App;
