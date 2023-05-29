import { API_URL } from "./const.js"

export const getLogin = async (token) => {
  try {
    response = await fetch(`${API_URL}/getLogin`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    });

    const data = response.json();
  } catch (error) {
    console.error(error);
  }
}