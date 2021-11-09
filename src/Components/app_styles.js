import styled, { css, keyframes } from 'styled-components';

const flex = `
    display: flex;
    flex-flow: row-wrap;
`;

const topPadding = `15vh`;

export const Slide = keyframes`
    0% {
        position: relative;
        opacity: 0;
        margin-left: 0px;
    }
    100% {
        position: relative;
        opacity: 1;
        margin-left: 50px;
    }
`
export const SlowShowing = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const Message = styled.div`
    color: white;
    font-style: italic;
    animation-name: ${Slide};
    animation-fill-mode: forwards;
    animation-duration: 2s;
    margin: auto;
    white-space: pre;
`

export const Container = styled.div`
    ${flex};
    ${props => props.padding==='large' && `
        padding: ${topPadding} 0vh;
    `}
    ${props => props.padding==='small' && `
        padding: 30px 0vh;
    `}
    ${props => props.showing==='slow' && css`
        animation-name: ${SlowShowing};
        animation-duration: 4s;
    `}
`

export const Info = styled.div`
    margin: auto;
    font-size: 1.1rem;
`

export const LangTitle = styled.h3`
    text-align: left;
    margin-left: 20px;
    animation-name: ${SlowShowing};
    animation-duration: 4s;
`
export const EditorContainer = styled.div`
    padding-top: ${topPadding};
`
export const MySelect = styled.select`
    padding: 2px;
    background-color: black;
    color: white;
    border: 1px solid grey;
    border-radius: 7px;
`

export const CodingArea = styled.textarea`
    padding: 5px;
    margin: 5px;
    background-color: black;
    color: white;
    border: 1px solid grey;
    border-radius: 7px;

`

export const TitleInput = styled.input`
    padding: 2px;
    border: none;
    &:focus {
        outline: none;
    }
`
