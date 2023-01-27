import React from 'react';

const CartWidget = ({ shoppingCount }) => {
    return (
        <>
            <span className="material-symbols-outlined" style={{color: 'white', fontSize: '2rem'}}>
                shopping_cart
            </span>
            <span style={{color: 'white', fontSize: '1.1rem'}}>
                {shoppingCount}
            </span>
        </>
    );
};

export default CartWidget;