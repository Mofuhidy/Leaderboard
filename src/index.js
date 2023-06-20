import './style.css';
import createScore from './modules/apiOperations.js';
import Board from './modules/leadrBoard.js';

const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const player = document.getElementById('player');
  const score = document.getElementById('score');

  createScore(player.value, score.value);
  player.value = '';
  score.value = '';
});