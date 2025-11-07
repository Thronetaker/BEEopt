let IS_PROD = false;
const server = IS_PROD ?
    "https://radferencebackend.onrender.com" :

    "http://localhost:3002"


export default server;