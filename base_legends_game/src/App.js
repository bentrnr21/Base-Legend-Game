import React from 'react';
import Card from './components/Card';

const cards = [
    { id: 1, name: 'Pyron, Lord of Fire', attack: 8, defense: 6, effect: 'Burns opponent (-2 HP per turn)' },
    { id: 2, name: 'Lightning Strike', attack: 5, defense: 4, effect: 'Deals 5 direct damage to the opponent' },
    { id: 3, name: 'Ancient Sword', attack: 3, defense: 7, effect: 'Boosts attack by +2 for the next turn' },
];

function App() {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Base Legends</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </div>
        </div>
    );
}

export default App;