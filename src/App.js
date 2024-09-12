import React, { useState } from 'react';
import './App.css';

// Substitua os caminhos abaixo pelos caminhos reais das imagens dos dados
const DICE_IMAGES = [
  '/dado1.png', 
  '/dado2.png', 
  '/dado3.png', 
  '/dado4.png', 
  '/dado5.png', 
  '/dado6.png'
];

function App() {
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);
  const [wins, setWins] = useState(0);
  const [totalRolls, setTotalRolls] = useState(0);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    
    setDice1(roll1);
    setDice2(roll2);

    const sum = roll1 + roll2;
    setTotalRolls(prev => prev + 1);

    if (sum === 7 || sum === 11) {
      setWins(prev => prev + 1);
      setMessage('Você ganhou!');
    } else {
      setMessage('Você perdeu!');
    }
  };

  const winPercentage = totalRolls === 0 ? 0 : Math.round((wins / totalRolls) * 100);

  return (
    <div className="App">
      <h1>Jogo dos Dados</h1>
      <div className="dice-container">
        <img src={dice1 ? DICE_IMAGES[dice1 - 1] : '/dado1.png'} alt="Dado 1" className="dice" />
        <img src={dice2 ? DICE_IMAGES[dice2 - 1] : '/dado1.png'} alt="Dado 2" className="dice" />
      </div>
      <button onClick={rollDice}>Jogar</button>
      <p>{message}</p>
      <p>Score {wins}/{totalRolls} = {winPercentage}%</p>
    </div>
  );
}

export default App;
