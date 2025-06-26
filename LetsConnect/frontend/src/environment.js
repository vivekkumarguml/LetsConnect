let IS_PROD = true;
const server = IS_PROD ?
    "https://letsconnectbackend.onrender.com" :

    "http://localhost:8000"


export default server;