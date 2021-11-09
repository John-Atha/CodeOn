import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function Header(props) {

    const [coding, setCoding] = useState(props.coding);

    useEffect(() => {
        setCoding(props.coding);
    }, [props.coding])

    const redirect = () => {
        props.setCoding(!coding);
    }

    return (
        <div>
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
        </div>
    )
}

export default Header;