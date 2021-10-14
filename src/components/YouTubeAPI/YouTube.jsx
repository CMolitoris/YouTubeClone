import axios from "axios";

const KEY = 'AIzaSyAEg67dDzltMnI9LlwTB2dl2VgF1y6ymDI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
})