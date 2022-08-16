import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
  return (
    <div className="container">
      <h1>Sign-in sheet</h1>
      <input type="text" placeholder="Type in your name..." />
      <button type="button">Sign in</button>
      <Card name="John Doe" timestamp="10:37:22" />
      <Card name="Jane Doe" timestamp="10:37:23" />
    </div>
  );
}
