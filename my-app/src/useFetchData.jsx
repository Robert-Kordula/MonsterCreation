import { useState, useEffect } from 'react'

function useFetchData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(url);

    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let json = await response.json();
        setData(json);
      } catch (error) {
        setData(error);
        console.log("error", error);
      }
    };
    fetchData();
  }, [url]);
  return { data };
}

export default useFetchData