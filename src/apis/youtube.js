import axios from "axios";

const KEY = "AIzaSyCfzgaLfdgQIrNM3lgMrTE8i7gQC_eaEu4";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
    },
});
