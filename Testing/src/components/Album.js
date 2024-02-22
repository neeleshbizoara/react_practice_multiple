import { useEffect, useState } from "react";
import axios from "axios";
export default function Album() {
  const [albums, setAlbums] = useState([]);

  const fetchAlbum = function () {
    return axios
      .get("https://jsonplaceholder.typicode.com/albums/2") // https://jsonplaceholder.typicode.com/albums/2
      .then((response) => {
        setAlbums(response.data);
        // return response.data;
      });
  };


  useEffect(() => {
    fetchAlbum();
  }, []);
  return (
    <div>
      <ul>
        {albums.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
