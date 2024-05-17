import axios from "axios";

const API_KEY = "HJNH9aHpE01PoVEA-VDNuSuQ_Hy1vpxBTK4TNE5yGok";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (searchWord, currentPage) => { 
   
        const response = await axios.get("/search/photos", {
            params: {
                query: searchWord,
                page: currentPage,
                per_page: 15,
                client_id: API_KEY,
               
            },
        });

        return response.data;
    
}