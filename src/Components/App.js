import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Home from './Home';
import '../index.css';

function App() {
  const [coding, setCoding] = useState(false)
  const [lang, setLang] = useState(null)

  const languages = [
    {
      'name': 'Java',
      'payload': 'java',
    },
    {
      'name': 'Python',
      'payload': 'py',
    },
    {
      'name': 'C',
      'payload': 'c',
    },
    {
      'name': 'C++',
      'payload': 'cpp',
    },
    {
      'name': 'C#',
      'payload': 'cs',
    },
    {
      'name': 'Ruby',
      'payload': 'rb',
    },      
    {
      'name': 'Kotlin',
      'payload': 'kt',
    }, 
    {
      'name': 'Swift',
      'payload': 'swift',
    },
  ]  

  const redirect = () => {
    setCoding(!coding);
  }

  const startCoding = (language=null) => {
    setCoding(true);
    setLang(language || languages[0])
  }

  return (
    <div className="App">
      <Button
        variant='outline-light'
        style={{'position': 'absolute', 'top': '3px', 'left': '3px'}}
        onClick={redirect}>
          {coding && 'Back Home' }
          {!coding && 'Get started'}
      </Button>
      <Button 
        variant='outline-light'
        style={{'position': 'absolute', 'top': '3px', 'right': '3px'}}
        href='https://github.com/John-Atha/CodeOn'
        rel='noopener noreferrer'
        target='_blank'>
          Source code
      </Button>
      {!coding &&
        <Home
          startCoding={startCoding}
          languages={languages}
        />
      }
      {coding && 
        null
      }
    </div>
  );
}

export default App;
