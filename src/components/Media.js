import React from 'react';

const Media = (props) => {
    const { nasaMedia, mediaType } = props;

    return (
        <div>
            <img
                alt='post thumbnail'
                className='post-image'
                src={nasaMedia}
            />
        </div>
    )
}

export default Media