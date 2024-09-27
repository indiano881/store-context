export const fetchData = async (url: string, updateFunction:(data:any)=>void) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        updateFunction(data.products);  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };