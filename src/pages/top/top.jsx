import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import './top.css';

function Top() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
      return () => {
        isMounted = false;
      };
  }, []);

  const filteredData = data && data.filter((item) =>
    item.title.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <div>
      {loading ? (
        <div className="loading-overlay" 
          data-testid="loading-spinner">
          <TailSpin
            visible={true}
            height="50"
            width="50"
          />
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data && data.length>0 ? (
        <div>
          <div className="search-box">
            <label htmlFor="searchText">Search by title includes: </label>
            <input
              type="text"
              id="searchText"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="card-grid">
            { filteredData.map((item) => (
              <Link key={item.id}
                to={`/todos/${item.id}`}
                className={`card ${item.completed ? "completed" : "not-completed"}`}>
                <h4>#{item.id}</h4>
                <h4>{item.title.length > 20 ? item.title.slice(0, 20)+'...' : item.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Top;
