import axios from "axios";

const KEY = 'AIzaSyDP9AghNJkgynFq0oAPDKmt6bE0dWUzjDg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
})