import React,  { useState, useEffect } from 'react'
import axios from 'axios' 


export default function useFetch( endpoint, query ) {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '60551f3b29msh521431fdd324856p1fb76fjsn4eff13bcf369',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async() => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data)
      setLoading(false)
    } catch (error) {
        setError(error)
        console.log(error);
        alert('Encountered an error!')
    } finally {
        setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const reFetchData = () => {
    setLoading(true)
    fetchData()
  }

  return { data, isLoading, error, reFetchData }
}
