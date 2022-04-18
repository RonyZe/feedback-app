import Card from "../component/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Page</h1>
        <p>This is a React app</p>

        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
