// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';

const gameId = '8kPKQdZ1a1fTYN9LxNsH';

const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const createScore = async (user, score) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    });
    const res = await response.json();
    if (response.ok) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: res.result,
        showConfirmButton: false,
        timer: 1500,
      });
      return res.result;
    }
    return null; // Return a default value when the response is not successful
  } catch (error) {
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
    return null;
  }
};

const getScore = async () => {
  const res = await fetch(apiUrl);
  const jsonRes = await res.json();
  return jsonRes;
};

export { createScore, getScore };
