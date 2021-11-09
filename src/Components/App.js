import React, { useState, useEffect } from 'react';

import Header from './Header';
import Home from './Home';
import Editor from './Editor';

import '../index.css';

function App() {

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

  const [coding, setCoding] = useState(false)
  const [lang, setLang] = useState(languages[0])


  const startCoding = (language=null) => {
    setCoding(true);
    setLang(language || languages[0])
  }

  return (
    <div className="App">
      <Header
        coding={coding}
        setCoding={setCoding}
      />

      {!coding &&
        <Home
          startCoding={startCoding}
          languages={languages}
        />
      }
      {coding && 
        <Editor 
          lang={lang}
          languages={languages}
          setLang={setLang}
        />
      }
    </div>
  );
}

export default App;
