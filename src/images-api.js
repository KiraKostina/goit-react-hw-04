import axios from "axios";

const API_KEY = "HJNH9aHpE01PoVEA-VDNuSuQ_Hy1vpxBTK4TNE5yGok";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (searchWord, page) => { 
    try {
        const response = await axios.get("/search/photos", {
            params: {
                query: searchWord,
                page: page,
                client_id: API_KEY,
            },
        });

        return response.data;
    }
    catch (error) { 
        console.log("Error");
    }
   
}