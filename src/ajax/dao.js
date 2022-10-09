const baseUrl = process.env.REACT_APP_BE_SERVER_BASE_URL;


const fetchCategories = async () => {
    const request = new Request(`${baseUrl}/category/all`,{
        method: 'GET',  
    });

    const response = await fetch(request);
    const data = await response.json();
    return data;
};


export default {
    fetchCategories,
};