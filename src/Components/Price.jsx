import React from 'react';

const Price = ({price}) => {
    return (
        <div>
            <span className='text-primary fw-bold'> {price}$</span>
        </div>
    );
}

export default Price;
