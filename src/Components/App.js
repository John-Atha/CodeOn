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
      'editor_mode': 'java',
    },
    {
      'name': 'Python',
      'payload': 'py',
      'editor_mode': 'python',
    },
    {
      'name': 'C',
      'payload': 'c',
      'editor_mode': 'c_cpp',
    },
    {
      'name': 'C++',
      'payload': 'cpp',
      'editor_mode': 'c_cpp',
    },
    {
      'name': 'C#',
      'payload': 'cs',
      'editor_mode': 'c_sharp',
    },
    {
      'name': 'Ruby',
      'payload': 'rb',
      'editor_mode': 'ruby',
    },      
    {
      'name': 'Kotlin',
      'payload': 'kt',
      'editor_mode': 'kotlin',
    }, 
    {
      'name': 'Swift',
      'payload': 'swift',
      'editor_mode': 'swift',
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
