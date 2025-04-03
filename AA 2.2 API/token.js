import axios from 'axios';

const clientId = 'ff0292f88e00449cbd92053ffa5d9e29';
const clientSecret = '708e6c1f73d4436aab506a205f9e1df8';

const authUrl = 'https://accounts.spotify.com/api/token';

const getToken = async () => {
  try {
    const response = await axios.post(authUrl, new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const token = response.data.access_token;
    console.log("Token de acceso:", token);
    return token;
  } catch (error) {
    console.error("Error al obtener el token:", error.response.data);
  }
};

getToken();
