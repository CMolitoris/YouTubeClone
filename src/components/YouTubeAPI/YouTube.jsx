import axios from "axios";

const KEY = 'AIzaSyBFvQ5F6XsuNlYYwK8nO46hl3-BKtEGwHU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    },
    headers: {}
})