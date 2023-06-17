import './style.css';
import players from './modules/players.js';

const playersScores = document.querySelector('.scores-list');

playersScores.innerHTML = players.map((player) => `<tr><td>${player.name}: ${player.score}</td></tr>`).join('');