import React from 'react';

const Image = ({image}) => {
    return (
        <div>
            <img src={image} className="card-img-top" alt="" srcset="" />
        </div>
    );
}

export default Image;
