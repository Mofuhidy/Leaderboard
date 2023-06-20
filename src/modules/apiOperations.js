const gameId = '8kPKQdZ1a1fTYN9LxNsH';

const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const createScore = async (user, score) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  return response;
};

export default createScore;
