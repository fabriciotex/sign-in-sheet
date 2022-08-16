import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
  const [guestName, setGuestName] = useState();
  const [guestList, setGuestList] = useState([]);
  const [user, setUser] = useState({});

  function handleGuestSignIn() {
    const newGuest = {
      name: guestName,
      timestamp: new Date().toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setGuestList((prevState) => [newGuest, ...prevState]);
  }

  function handleInputChange(input) {
    setGuestName(input);
  }

  async function fetchUserData() {
    try {
      const response = await fetch(`https://api.github.com/users/fabriciotex`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Sign-in sheet</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar_url} alt={`${user.name} avatar`} />
        </div>
      </header>
      <input
        type="text"
        placeholder="Type in your name..."
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button type="button" onClick={handleGuestSignIn}>
        Sign in
      </button>
      {guestList.map((guest, index) => (
        <Card key={index} name={guest.name} timestamp={guest.timestamp} />
      ))}
    </div>
  );
}
