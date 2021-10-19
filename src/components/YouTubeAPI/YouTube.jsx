import axios from "axios";

const KEY = 'AIzaSyAYeKsezkaeMiwJe_1b3ayMyQ8zHhfw_3I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    },
    headers: {}
})