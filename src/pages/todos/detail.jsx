import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner';
import "./detail.css";

function Detail() {
  const { taskId } = useParams();
  const [taskData, setTaskData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const taskResp = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
        if (!taskResp.ok) {
          throw new Error(`${taskResp.status} ${taskResp.statusText}`);
        }
        const taskDetail = await taskResp.json();
        if (isMountedRef.current) {
          setTaskData(taskDetail);
        }

        const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${taskDetail.userId}`);
        if (!userResp.ok) {
          throw new Error(`${userResp.status} ${userResp.statusText}`);
        }
        if (isMountedRef.current) {
          setUserData(await userResp.json());
        }

      } catch (error) {
        if (isMountedRef.current) {
          setError(error.message);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchData();
    return () => {
      isMountedRef.current = false;
    };
  }, [taskId]);
  

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
      ) : taskData && userData ? (
        <div>
          <p>Item Number: {taskData.id}</p>
          <p>Creator: {userData.name}</p>
          <p>Title: {taskData.title}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Detail;