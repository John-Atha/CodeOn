import React, { useEffect } from 'react';
import { createNotification } from '../createNotification';
import { Container, Message, Info, LangTitle } from './app_styles';
import { Button } from 'react-bootstrap';
import '../index.css';

function Home(props) {
   
    useEffect(() => {
        const visited = sessionStorage.getItem('visited');
        if (!visited) {
        createNotification('success', 'Hello!', 'We are glad that you are here!');
        sessionStorage.setItem('visited', true);
        }
    }, [])

    return (
        <div>
            <Container padding={'large'}>
                <Message>
                    <h2 style={{'marginBottom': '50px'}}>
                    Welcome to CodeOn
                    </h2>
                    <h4>
                    Why downloading code editors,<br/>
                    when you can find one online?
                    </h4>
                </Message>
                <Info>
                    With us, you code:
                    <ul>
                    <li><b>from anywhere</b></li>
                    <li>in multiple languages</li>
                    <li>with a rapid and easy-to-use environment</li>
                    </ul>
                    <Button
                    variant='primary'
                    onClick={props.startCoding}>
                    Get started
                        <svg style={{'marginTop': '-5px'}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                        <svg style={{'marginTop': '-5px'}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                        <svg style={{'marginTop': '-5px'}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                        </svg>
                    </Button>
                </Info>
            </Container>
            <LangTitle>
                Supported Languages
            </LangTitle>
            <Container padding={'small'} showing={'slow'}>
                {props.languages.map((value, index) => {
                    return (
                    <Button
                        style={{'margin': 'auto'}}
                        variant='outline-success'
                        key={index}
                        onClick={()=>props.startCoding(value)}>
                        {value.name}
                        </Button>
                    )
                 })
                }
            </Container>
        </div>
    );
}

export default Home;
