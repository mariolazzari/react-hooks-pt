import { useEffect, useState } from "react";
import "./UseEffect.css";
import axios from "axios";

const UseEffect = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(res.data);
      setError("");
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="emails">
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          <h3>{error}</h3>
          <ul>
            {data.map(({ id, email }) => (
              <li key={id}>{email}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UseEffect;
