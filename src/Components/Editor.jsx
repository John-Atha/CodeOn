import React, { useState, useEffect } from 'react';
import { Container, EditorContainer, MySelect, TitleInput } from './app_styles';
import AceEditor from 'react-ace';
import { Button, Modal } from 'react-bootstrap';
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
    const [downloadLink, setDownloadLink] = useState('');
    const [downloading, setDownloading] = useState(false);
    const [title, setTitle] = useState('code');

    useEffect(() => {
        setLang(props.lang);
        setTitle('code');
    }, [props.lang])

    const updateCode = (newVal) => {
        console.log(lang)
        setCode(newVal);
    }

    const download = () => {
        setDownloading(true);
        const file = new Blob([code], {type: 'text/plain'});
        if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)
        setDownloadLink(window.URL.createObjectURL(file))
        setTitle(`code.${lang.payload}`)
    }

    const run = () => {
        ;
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
            <Container>
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
                <Button
                    style={{'margin': '0px 5px'}}
                    onClick={download}>
                        Download
                        <svg style={{'marginLeft': '3px', 'marginTop': '-2px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                        </svg>
                </Button>
                <Button style={{'margin': '0px 5px'}}>
                    Run
                    <svg style={{'marginLeft': '3px', 'marginTop': '-2px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                    </Button>           
            </Container>
            <div style={{'margin': '10px 0px'}} />
            <AceEditor
                mode={lang.editor_mode}
                theme="monokai"
                onChange={updateCode}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                style={{'width': 'auto'}}
            />
            {downloading &&
                <Modal.Dialog style={{'position': 'absolute', 'width': '400px', 'top': '0', 'left': '50vw', 'marginLeft': '-200px'}}>
                    <Modal.Header style={{'color': 'black'}}>
                        <Modal.Title>Choose the file title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <TitleInput
                            name='title'
                            value={title}
                            placeholder='Type the file title...'
                            onChange={(event)=>setTitle(event.target.value)}
                            autoFocus
                        />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setDownloading(false)}>Close</Button>
                        <Button variant="primary"
                            href= {downloadLink}
                            download={title}>
                                Download
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>            
            }


        </EditorContainer>
    )
    
}

export default Editor;