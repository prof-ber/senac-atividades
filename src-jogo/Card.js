import React from 'react';

function Card({ figura, isMatched, handleClick, id, isFlipped }) {
    // Removed local state `virada` and `useEffect` as flipping is now controlled by props

    return(
        <div className={`card ${isFlipped || isMatched ? 'flipped' : ''}`} onClick={() => handleClick(id)}>
            {isFlipped || isMatched ? figura : 'X'}
        </div>
    );
}

export default Card;