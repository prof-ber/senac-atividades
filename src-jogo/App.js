import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card';

const figuras = ['💀', '👻', '🎃', '🤡', '🦁', '🐯', '🐱', '🐼', '🦄', '✌️'];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function inicializarBaralho() {
  const baralho = [];
  figuras.forEach((figura, index) => {
    baralho.push({ id: index * 2, figura, matched: false });
    baralho.push({ id: index * 2 + 1, figura, matched: false });
  });
  shuffleArray(baralho);
  return baralho;
}

function App() {
  const [cards, setCards] = useState(inicializarBaralho());
  const [cartasViradas, setCartasViradas] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    if (cartasViradas.length === 2) {
      const match = cartasViradas[0].figura === cartasViradas[1].figura;
      if (match) {
        setMatches([...matches, cartasViradas[0].figura]);
        setCartasViradas([]);
      } else {
        setTimeout(() => setCartasViradas([]), 1000);
      }
    }
  }, [cartasViradas, matches]);

  const handleClick = (id) => {
    const card = cards.find(card => card.id === id);
    if (cartasViradas.length < 2 && !cartasViradas.find(c => c.id === id)) {
      setCartasViradas([...cartasViradas, card]);
    }
  };

  const resetGame = () => {
    setCards(inicializarBaralho());
    setCartasViradas([]);
    setMatches([]);
  };

  const isVictory = matches.length === figuras.length;

  const inicializarJogo = () => {
    return cards.map((card) => (
      <Card
        key={card.id}
        id={card.id}
        figura={card.figura}
        isMatched={matches.includes(card.figura)}
        isFlipped={cartasViradas.some(carta => carta.id === card.id) || matches.includes(card.figura)}
        handleClick={handleClick}
      />
    ));
  };

  return (
    <div className="jogo">
      {inicializarJogo()}
      {isVictory && (
        <div className="victory-overlay">
          <div className="victory-message">Parabéns! Você venceu!</div>
          <button onClick={resetGame} className="reset-button">Reiniciar Jogo</button>
        </div>
      )}
    </div>
  );
}

export default App;