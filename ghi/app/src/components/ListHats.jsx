import { useState, useEffect } from "react";
import axios from "axios";


export default function ListHats() {
  // provide default value to useState
  const [hats, setHats] = useState([]);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    const url = "http://localhost:8090/api/hats/";
    {
      loadData &&
        axios
          .get(url)
          .then(({ data }) => {
            setHats(data.hats);
            setLoadData(false);
          })
          .catch(({ message }) => console.log(message));
    }
  }, [loadData]);

  const deleteHat = (id) => {
    axios
      .delete(`http://localhost:8090/api/hats/${id}/`)
      .then(({ data }) => {
        console.log(data);
        setLoadData(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Hat Style</th>
            <th>Color</th>
            <th>Fabric</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {hats.map((hat, index) => {
            return (
              <tr key={index}>
                <td>{hat.style_name}</td>
                <td>{hat.color}</td>
                <td>{hat.fabric}</td>
                <td>
                  <img
                    src={hat.photo_url}
                    alt={hat.style_name}
                    width={30}
                    height={30}
                  />
                </td>
                <td>
                  <p
                    onClick={() => deleteHat(hat.id)}
                    style={{ cursor: "pointer" }}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
