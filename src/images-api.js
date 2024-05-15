import axios from "axios";

const API_KEY = "HJNH9aHpE01PoVEA-VDNuSuQ_Hy1vpxBTK4TNE5yGok";

axios.defaults.baseURL = "https://api.unsplash.com/api/v1";

export const getImages = async (query, page) => { 
    const response = await axios.get("/search/photos", {
        params: {
            query,
            page,
            key: API_KEY,
        },
    });

    return response.data;
}