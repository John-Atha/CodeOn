import React, { useState, useEffect } from 'react';
import { EditorContainer, MySelect } from './app_styles';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-monokai";

function Editor(props) {
    const [lang, setLang] = useState(props.lang);
    const [code, setCode] = useState('');

    useEffect(() => {
        setLang(props.lang);
    }, [props.lang])

    const updateCode = (newVal) => {
        console.log(lang)
        setCode(newVal);
    }

    const updateSelected = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedDataset = event.target.options[selectedIndex].dataset;
        props.setLang({
            name: selectedDataset.name,
            payload: selectedDataset.payload,
            editor_mode: selectedDataset.editor_mode,
        });
    }

    return (
        <EditorContainer>
            
            <label style={{'margin': '3px'}} htmlFor="language">Language: </label>
            <MySelect name='language' onChange={updateSelected}>
                {props.languages.map((value, index) => {
                    const lang_name = value.name;
                    const lang_payload = value.payload;
                    const lang_editor_mode = value.editor_mode;
                    return (
                        <option
                            key={index}
                            value={lang_payload}
                            data-name={lang_name}
                            data-payload={lang_payload}
                            data-editor_mode={lang_editor_mode}>
                                {lang_name}
                        </option>
                    )
                })}
            </MySelect>

            <AceEditor
                mode={lang.editor_mode}
                theme="monokai"
                onChange={updateCode}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                style={{'width': 'auto'}}
            />

        </EditorContainer>
    )
    
}

export default Editor;