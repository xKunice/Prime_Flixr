import { useState, useEffect } from "react";

export function useFetch(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Mjg0YjdlZjc0MmYyMTk0OGFjYmE0YTRlNGQyYjhjNyIsInN1YiI6IjY1MDE1MmJmZTBjYTdmMDE0ZjcwYzViYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwvcLYItTQYqA-3uhxkcfE3fqukxXscXZt7xkxVlEjI'
        }
      };
      
      useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
        },[]);


      return {data, loading, error};

}