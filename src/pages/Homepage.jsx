import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
function Homepage() {
    return (
        <div>
            <Navbar/>
            <h1>Homepage</h1>
            <Link to="/pricing">Check out pricing </Link>
        </div>
    );
}

export default Homepage;