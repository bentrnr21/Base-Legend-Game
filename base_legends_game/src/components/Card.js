import React from 'react';

const Card = ({ card }) => {
    return (
        <div style={{ border: '1px solid #000', padding: '10px', borderRadius: '10px', width: '200px', background: '#eee' }}>
            <h2>{card.name}</h2>
            <p><strong>Attack:</strong> {card.attack}</p>
            <p><strong>Defense:</strong> {card.defense}</p>
            <p><strong>Effect:</strong> {card.effect}</p>
            <button style={{ padding: '5px 10px', marginTop: '10px' }}>Play</button>
        </div>
    );
};

export default Card;