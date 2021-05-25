import React from 'react';

const Content = (props) => {
    const { info, title, date } = props;

    return (
        <container>
            <h2>Title: <span>{title}</span></h2>
            <h3>Date: <span>{date}</span></h3>
            <p>{info}</p>
        </container>
    )
}

export default Content;