import React, { useState, useEffect } from 'react';
import { EditorContainer, MySelect } from './app_styles';


function Editor(props) {
    const [lang, setLang] = useState(props.lang);

    useEffect(() => {
        setLang(props.lang);
    }, [props.lang])

    const updateSelected = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedDataset = event.target.options[selectedIndex].dataset;
        props.setLang({
            name: selectedDataset.name,
            payload: selectedDataset.payload,
        });
    }

    return (
        <EditorContainer>
            
            <label style={{'margin': '3px'}} htmlFor="language">Language: </label>
            <MySelect name='language' value={lang.payload} onChange={updateSelected}>
                {props.languages.map((value, index) => {
                    const lang_name = value.name;
                    const lang_payload = value.payload;
                    return (
                        <option
                            key={index}
                            value={lang_payload}
                            data-name={lang_name}
                            data-payload={lang_payload}>
                                {lang_name}
                        </option>
                    )
                })}
            </MySelect>



        </EditorContainer>
    )
    
}

export default Editor;