import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-3d454.firebaseio.com/'
});

export default instance;