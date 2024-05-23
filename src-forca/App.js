import './App.css';
import React, { useState } from 'react';

const palavras = ["cachorro", "gato", "papagaio", "cobra", "elefante", "girafa", "leão", "tigre", "urso", "zebra", "lobo", "raposa", "coelho", "camelo", "rinoceronte", "hipopótamo", "gorila", "chimpanzé", "orangotango", "pantera", "jaguar", "veado", "esquilo", "morcego", "baleia", "golfinho", "tubarão", "polvo", "lagosta", "caranguejo", "tartaruga", "iguana", "lagarto", "cobra", "águia", "falcão", "pombo", "papagaio", "arara", "tucano", "peixe", "salmão", "truta", "carpa", "periquito", "canário", "galinha", "pato", "cisne", "ganso"];
let palavraEscolhida = inicializarJogo();
let erros = 0;

function inicializarJogo(){
  const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
  return palavraEscolhida.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
}

function App() {
  const [palavraFormatada, setPalavraFormatada] = useState(palavraEscolhida);
  const [palavraDisplay, setPalavraDisplay] = useState(Array(palavraEscolhida.length).fill('_'));
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [jogoTerminou, setJogoTerminou] = useState(false);
  const [venceu, setVenceu] = useState(false);

const tentarLetra = (letra) => {
  let acertou = false;
  const novaPalavraDisplay = palavraDisplay.map((char, index) => {
    if (palavraFormatada[index] === letra) {
      acertou = true;
      return letra;
    }
    return char;
  });

  setPalavraDisplay(novaPalavraDisplay);

  if (!acertou) {
    erros++;
  }
  setGuessedLetters(prevGuessedLetters => [...prevGuessedLetters, letra]);
  const ganhou = !novaPalavraDisplay.includes('_');
  if (ganhou) {
    setJogoTerminou(true);
    setVenceu(true);
  } else if (erros + 1 > 6) { // Verifica se perdeu
    setJogoTerminou(true);
  }
};

const renderBoneco = (erros) => {
  return (
    <svg width="200" height="250" viewBox="0 0 200 250">
      {<line x1="10" y1="230" x2="140" y2="230" stroke="black" strokeWidth="2"/>}
      {<line x1="75" y1="230" x2="75" y2="50" stroke="black" strokeWidth="2"/>}
      {<line x1="75" y1="50" x2="150" y2="50" stroke="black" strokeWidth="2"/>}
      {<line x1="150" y1="50" x2="150" y2="70" stroke="black" strokeWidth="2"/>}
      {erros > 0 && <circle cx="150" cy="90" r="20" stroke="black" strokeWidth="2" fill="transparent"/>}
      {erros > 1 && <line x1="150" y1="110" x2="150" y2="170" stroke="black" strokeWidth="2"/>}
      {erros > 2 && <line x1="150" y1="120" x2="130" y2="150" stroke="black" strokeWidth="2"/>}
      {erros > 3 && <line x1="150" y1="120" x2="170" y2="150" stroke="black" strokeWidth="2"/>}
      {erros > 4 && <line x1="150" y1="170" x2="130" y2="200" stroke="black" strokeWidth="2"/>}
      {erros > 5 && <line x1="150" y1="170" x2="170" y2="200" stroke="black" strokeWidth="2"/>}
    </svg>
  );
};

const reiniciarJogo = () => {
  palavraEscolhida = inicializarJogo();
  erros = 0;
  setPalavraFormatada(palavraEscolhida);
  setPalavraDisplay(Array(palavraEscolhida.length).fill('_'));
  setGuessedLetters([]);
  setJogoTerminou(false);
  setVenceu(false);
};

  return (
    <div className="App">
      <div className='Palavra'>{palavraDisplay}</div>
      <div className='Boneco'>{renderBoneco(erros)}</div>
      {!jogoTerminou ? (<div className='Letras'>
        {!guessedLetters.includes('A') && <button className='Letra' onClick={() => tentarLetra('A')}>A</button>}
        {!guessedLetters.includes('B') && <button className='Letra' onClick={() => tentarLetra('B')}>B</button>}
        {!guessedLetters.includes('C') && <button className='Letra' onClick={() => tentarLetra('C')}>C</button>}
        {!guessedLetters.includes('D') && <button className='Letra' onClick={() => tentarLetra('D')}>D</button>}
        {!guessedLetters.includes('E') && <button className='Letra' onClick={() => tentarLetra('E')}>E</button>}
        {!guessedLetters.includes('F') && <button className='Letra' onClick={() => tentarLetra('F')}>F</button>}
        {!guessedLetters.includes('G') && <button className='Letra' onClick={() => tentarLetra('G')}>G</button>}
        {!guessedLetters.includes('H') && <button className='Letra' onClick={() => tentarLetra('H')}>H</button>}
        {!guessedLetters.includes('I') && <button className='Letra' onClick={() => tentarLetra('I')}>I</button>}
        {!guessedLetters.includes('J') && <button className='Letra' onClick={() => tentarLetra('J')}>J</button>}
        {!guessedLetters.includes('K') && <button className='Letra' onClick={() => tentarLetra('K')}>K</button>}
        {!guessedLetters.includes('L') && <button className='Letra' onClick={() => tentarLetra('L')}>L</button>}
        {!guessedLetters.includes('M') && <button className='Letra' onClick={() => tentarLetra('M')}>M</button>}
        {!guessedLetters.includes('N') && <button className='Letra' onClick={() => tentarLetra('N')}>N</button>}
        {!guessedLetters.includes('O') && <button className='Letra' onClick={() => tentarLetra('O')}>O</button>}
        {!guessedLetters.includes('P') && <button className='Letra' onClick={() => tentarLetra('P')}>P</button>}
        {!guessedLetters.includes('Q') && <button className='Letra' onClick={() => tentarLetra('Q')}>Q</button>}
        {!guessedLetters.includes('R') && <button className='Letra' onClick={() => tentarLetra('R')}>R</button>}
        {!guessedLetters.includes('S') && <button className='Letra' onClick={() => tentarLetra('S')}>S</button>}
        {!guessedLetters.includes('T') && <button className='Letra' onClick={() => tentarLetra('T')}>T</button>}
        {!guessedLetters.includes('U') && <button className='Letra' onClick={() => tentarLetra('U')}>U</button>}
        {!guessedLetters.includes('V') && <button className='Letra' onClick={() => tentarLetra('V')}>V</button>}
        {!guessedLetters.includes('W') && <button className='Letra' onClick={() => tentarLetra('W')}>W</button>}
        {!guessedLetters.includes('X') && <button className='Letra' onClick={() => tentarLetra('X')}>X</button>}
        {!guessedLetters.includes('Y') && <button className='Letra' onClick={() => tentarLetra('Y')}>Y</button>}
        {!guessedLetters.includes('Z') && <button className='Letra' onClick={() => tentarLetra('Z')}>Z</button>}
        {!guessedLetters.includes('0') && <button className='Letra' onClick={() => tentarLetra('0')}>0</button>}
        {!guessedLetters.includes('1') && <button className='Letra' onClick={() => tentarLetra('1')}>1</button>}
        {!guessedLetters.includes('2') && <button className='Letra' onClick={() => tentarLetra('2')}>2</button>}
        {!guessedLetters.includes('3') && <button className='Letra' onClick={() => tentarLetra('3')}>3</button>}
        {!guessedLetters.includes('4') && <button className='Letra' onClick={() => tentarLetra('4')}>4</button>}
        {!guessedLetters.includes('5') && <button className='Letra' onClick={() => tentarLetra('5')}>5</button>}
        {!guessedLetters.includes('6') && <button className='Letra' onClick={() => tentarLetra('6')}>6</button>}
        {!guessedLetters.includes('7') && <button className='Letra' onClick={() => tentarLetra('7')}>7</button>}
        {!guessedLetters.includes('8') && <button className='Letra' onClick={() => tentarLetra('8')}>8</button>}
        {!guessedLetters.includes('9') && <button className='Letra' onClick={() => tentarLetra('9')}>9</button>}
      </div>) : venceu ? (
        <div>
          <p>Parabéns você venceu!</p>
          <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
        </div>
      ) : (
        <div>
          <p>Que pena, você perdeu!</p>
          <button onClick={reiniciarJogo}>Reiniciar Jogo</button>
        </div>
      )}
    </div>
  );
}

export default App;
