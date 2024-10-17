import React from 'react';

const Description = ({description}) => {
    return (
        <div>
            <p className="card-text"> {description} </p>
        </div>
    );
}

export default Description;
