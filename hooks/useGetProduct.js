import { useEffect, useState } from 'react';

const useGetProduct = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/9a9ed67c-e1e4-4c64-8e76-9ae76b57d181');
        const json = await response.json();
        json.votes = json.votes.sort((a, b) => b.star - a.star);
        json.productImage = require("../assets/product1.png");
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useGetProduct;