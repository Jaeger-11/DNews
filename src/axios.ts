import axios from "axios"

export const useAxios =  axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers:{
        "content-type": "application/json"
    }
});