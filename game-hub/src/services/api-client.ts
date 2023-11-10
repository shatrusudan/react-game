import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key : 'bb12e8fc7dce46e581243e16ba33981b'
    }
})
