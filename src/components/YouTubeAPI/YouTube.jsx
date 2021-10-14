import axios from "axios";

const KEY = 'AIzaSyBM0mjqttSwbVIck6S_ajvfYAZhP-Q0rhs'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
})