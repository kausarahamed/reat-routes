import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setfriends(data));
  }, []);
  return (
    <div>
      <h2>hello friends how ar you</h2>
      <p>
        <small>Taka dhar lagbi...:{friends.length}</small>
      </p>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
