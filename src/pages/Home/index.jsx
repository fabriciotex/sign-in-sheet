import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
  return (
    <div className="container">
      <h1>Sign-in sheet</h1>
      <input type="text" placeholder="Type in your name..." />
      <button type="button">Sign in</button>
      <Card />
      <Card />
      <Card />
    </div>
  );
}
