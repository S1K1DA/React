import axiosInstance from "../../config/axiosConfig";

export const getFreeList = async ({ cpage, category, searchText }) => {
    try {
        const response = await axiosInstance.get("/freeBoard", {
            params: {
                cpage: cpage,
                category: category,
                searchText: searchText,
            },
        });
        return response.data;
    } catch (err) {
        console.log("Axios failad : " + err);
        throw err;
    }
}