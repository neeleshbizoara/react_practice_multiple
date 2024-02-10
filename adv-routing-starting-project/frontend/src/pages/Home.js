function Home() {
    return <><h1>Home page</h1></>
}

export default Home;

/* import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get('https://random-data-api.com/api/v2/addresses?size=100&response_type=json',{
            // headers: {
            //   // Add your headers here
            //   'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            //   'Content-Type': 'application/json', // Example of content type header
            // }
          });
        const fetchedData = response.data;

        // Simulate progressive loading by updating state incrementally
        const dataChunks = [];
        for (let i = 0; i < fetchedData.length; i += 10) {
          dataChunks.push(fetchedData.slice(i, i + 10)); // Update state with chunks of 10 items
          await new Promise(resolve => setTimeout(resolve, 500)); // Simulate delay between updates
        }

        // Update state with the final data
        setData(dataChunks.flat());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Progressive UI Loading Example</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.country}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
 */