export const fetchData = async (url: string, updateFunction:(data:any)=>void) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        updateFunction(data.products);  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  export const capitalizeFirstLetter=(str:string)=> {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    export const fetchSixRandom = async (updateFunction: any) => {
      // Generate six random IDs
      const randomIds = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * 196)  
      );
      try {
        const products = [];
        for (const id of randomIds) {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const product = await res.json();
          products.push(product);
        }
        updateFunction(products);
      } catch (error) {
        console.error("Error fetching random products:", error);
      }
    };
    