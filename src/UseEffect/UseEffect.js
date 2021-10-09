import { useEffect, useState } from "react";
import "./UseEffect.css";
import axios from "axios";

const UseEffect = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="emails">
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UseEffect;
