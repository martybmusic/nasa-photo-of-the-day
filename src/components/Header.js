import React from 'react';
import style from 'styled-components';

const Container = style.div`
display:flex;
justify-content:center;
padding:2.5rem;
font-size:2rem;
background:#9a9993;
`

function Header(props) {
    return (
        <Container>
            <h1>NASA media.of.the.day</h1>
        </Container>
    )
}

export default Header;
